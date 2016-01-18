package org.topcat.zpm.modules.admin.dao;

import org.topcat.zpm.common.annotation.MyBatisDao;
import org.topcat.zpm.modules.admin.entity.User;
import tk.mybatis.mapper.common.Mapper;

@MyBatisDao
public interface UsersMapper extends Mapper<User> {
    User findByLoginName(String loginName);
}