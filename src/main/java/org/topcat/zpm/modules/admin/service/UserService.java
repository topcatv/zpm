package org.topcat.zpm.modules.admin.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.topcat.zpm.modules.dao.UsersMapper;
import org.topcat.zpm.modules.entity.User;

/**
 * Created by topcat on 16/1/20.
 */
@Component
@Transactional
public class UserService {
    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UsersMapper usersMapper;

    public PageInfo<User> findAll(PageInfo<User> pager){
        PageHelper.startPage(pager.getPageNum(), pager.getPageSize());
        return new PageInfo<User>(usersMapper.selectAll());
    }

    public void save(User user) {
        usersMapper.insert(user);
    }
}
