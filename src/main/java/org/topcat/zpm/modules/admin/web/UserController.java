package org.topcat.zpm.modules.admin.web;

import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.topcat.zpm.common.web.BaseController;
import org.topcat.zpm.modules.admin.service.UserService;
import org.topcat.zpm.modules.entity.User;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by topcat on 16/1/20.
 */
@Controller
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "${adminPath}/users", method = RequestMethod.GET)
    @ResponseBody
    public String listUsers(HttpServletResponse response, PageInfo<User> pageInfo){
        PageInfo<User> all = userService.findAll(pageInfo);
        Map<String, Object> model = new HashMap<String, Object>(2);
        model.put("qr", all.getList());
        model.put("total", all.getTotal());

        return renderString(response, model);
    }

    @RequestMapping(value = "${adminPath}/users", method = RequestMethod.POST)
    @ResponseBody
    public String save(User user, HttpServletResponse response){
        userService.save(user);
        Map<String, Object> model = new HashMap<String, Object>(1);
        model.put("success", true);
        return renderString(response, model);
    }
}
