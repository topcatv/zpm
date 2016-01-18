package org.topcat.zpm.modules.admin.dao;

import org.topcat.zpm.common.annotation.MyBatisDao;
import org.topcat.zpm.modules.admin.entity.Menu;
import tk.mybatis.mapper.common.Mapper;

@MyBatisDao
public interface MenusMapper extends Mapper<Menu> {
}