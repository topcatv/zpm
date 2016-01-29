package org.topcat.zpm.modules.dao;

import org.topcat.zpm.common.annotation.MyBatisDao;
import org.topcat.zpm.modules.entity.Permission;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@MyBatisDao
public interface PermissionMapper extends Mapper<Permission> {
    List<Permission> findByUser(Long userId);
}