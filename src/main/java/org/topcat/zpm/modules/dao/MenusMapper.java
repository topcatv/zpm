package org.topcat.zpm.modules.dao;

import org.topcat.zpm.common.annotation.MyBatisDao;
import org.topcat.zpm.modules.entity.Menu;
import tk.mybatis.mapper.common.Mapper;

@MyBatisDao
public interface MenusMapper extends Mapper<Menu> {
}