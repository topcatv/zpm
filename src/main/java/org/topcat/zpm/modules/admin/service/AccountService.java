/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package org.topcat.zpm.modules.admin.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.topcat.zpm.common.utils.Digests;
import org.topcat.zpm.common.utils.Encodes;
import org.topcat.zpm.modules.dao.UsersMapper;
import org.topcat.zpm.modules.entity.User;

/**
 * 用户管理类.
 * 
 * @author calvin
 */
// Spring Service Bean的标识.
@Component
@Transactional
public class AccountService {

	public static final String HASH_ALGORITHM = "SHA-1";
	public static final int HASH_INTERATIONS = 1024;
	private static final int SALT_SIZE = 8;

	private static Logger logger = LoggerFactory.getLogger(AccountService.class);

	private UsersMapper usersMapper;

	public List<User> getAllUser() {
		return (List<User>) usersMapper.selectAll();
	}

	public User getUser(Long id) {
		return usersMapper.selectByPrimaryKey(id);
	}

	public User findUserByLoginName(String loginName) {
		return  usersMapper.findByLoginName(loginName);
	}

	public void registerUser(User user) {
		entryptPassword(user);
		usersMapper.insert(user);
	}

	public void updateUser(User user) {
		if (StringUtils.isNotBlank(user.getPlainPassword())) {
			entryptPassword(user);
		}
		usersMapper.insert(user);
	}

	public void deleteUser(Long id) {
		usersMapper.deleteByPrimaryKey(id);
	}

	/**
	 * 取出Shiro中的当前用户LoginName.
	 */
	private String getCurrentUserName() {
		ShiroDbRealm.Principal user = (ShiroDbRealm.Principal) SecurityUtils.getSubject().getPrincipal();
		return user.loginName;
	}

	/**
	 * 设定安全的密码，生成随机的salt并经过1024次 sha-1 hash
	 */
	private void entryptPassword(User user) {
		byte[] salt = Digests.generateSalt(SALT_SIZE);
		user.setSalt(Encodes.encodeHex(salt));

		byte[] hashPassword = Digests.sha1(user.getPlainPassword().getBytes(), salt, HASH_INTERATIONS);
		user.setPassword(Encodes.encodeHex(hashPassword));
	}

	@Autowired
	public void setUsersMapper(UsersMapper usersMapper) {
		this.usersMapper = usersMapper;
	}
}