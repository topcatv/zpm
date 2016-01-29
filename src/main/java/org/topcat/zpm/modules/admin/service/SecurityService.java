package org.topcat.zpm.modules.admin.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.topcat.zpm.modules.dao.PermissionMapper;
import org.topcat.zpm.modules.entity.Permission;

import java.util.List;

/**
 * Created by topcat on 16/1/20.
 */
@Component
@Transactional
public class SecurityService {

    private static Logger logger = LoggerFactory.getLogger(SecurityService.class);

    @Autowired
    private PermissionMapper permissionMapper;

    public List<Permission> findPermissionByUser(Long userId){
        return permissionMapper.findByUser(userId);
    }
}
