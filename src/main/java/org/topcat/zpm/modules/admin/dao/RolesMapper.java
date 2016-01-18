package org.topcat.zpm.modules.admin.dao;

import org.topcat.zpm.common.annotation.MyBatisDao;
import org.topcat.zpm.modules.admin.entity.Role;
import tk.mybatis.mapper.common.Mapper;

@MyBatisDao
public interface RolesMapper extends Mapper<Role> {
}