package org.topcat.zpm.modules.admin.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.topcat.zpm.common.web.BaseController;
import org.topcat.zpm.modules.admin.service.SecurityService;
import org.topcat.zpm.modules.admin.service.ShiroDbRealm;
import org.topcat.zpm.modules.admin.utils.UserUtils;

import javax.servlet.http.HttpServletResponse;
import java.security.Security;

/**
 * Created by topcat on 16/1/20.
 */
@Controller
public class SecurityController extends BaseController {

    @Autowired
    private SecurityService securityService;

    @RequestMapping(value = "${adminPath}/permissions", method = RequestMethod.GET)
    @ResponseBody
    public String fetchPermissions(HttpServletResponse response, Model model){
        ShiroDbRealm.Principal principal = UserUtils.getPrincipal();
        if(principal != null)
            model.addAttribute("permissions", securityService.findPermissionByUser(principal.getId()));
        return renderString(response, model);
    }

}
