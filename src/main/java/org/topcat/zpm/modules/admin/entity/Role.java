/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package org.topcat.zpm.modules.admin.entity;

import com.google.common.base.Function;
import com.google.common.collect.Collections2;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.Length;
import org.topcat.zpm.common.config.Global;
import org.topcat.zpm.common.entity.DataEntity;

import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Collection;
import java.util.List;

/**
 * 角色Entity
 * @author ThinkGem
 * @version 2013-12-05
 */
@Table(name = "sys_roles")
public class Role extends DataEntity<Role> {
	
	private static final long serialVersionUID = 1L;
	private String name; 	// 角色名称
	private String enname;	// 英文名称
	@Column(name = "roleType")
	private String roleType;// 权限类型

	private String useable; 		//是否是可用

    @Transient
	private User user;		// 根据用户ID查询角色列表

    @Transient
	private List<Menu> menuList = Lists.newArrayList(); // 拥有菜单列表

	public Role() {
		super();
		this.useable= Global.YES;
	}
	
	public Role(Long id){
		super(id);
	}
	
	public Role(User user) {
		this();
		this.user = user;
	}

	public String getUseable() {
		return useable;
	}

	public void setUseable(String useable) {
		this.useable = useable;
	}

	@Length(min=1, max=100)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Length(min=1, max=100)
	public String getEnname() {
		return enname;
	}

	public void setEnname(String enname) {
		this.enname = enname;
	}
	
	@Length(min=1, max=100)
	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public List<Menu> getMenuList() {
		return menuList;
	}

	public void setMenuList(List<Menu> menuList) {
		this.menuList = menuList;
	}

	public List<Long> getMenuIdList() {
		List<Long> menuIdList = Lists.newArrayList();
		for (Menu menu : menuList) {
			menuIdList.add(menu.getId());
		}
		return menuIdList;
	}

	public void setMenuIdList(Collection<Long> menuIdList) {
		menuList = Lists.newArrayList();
		for (Long menuId : menuIdList) {
			Menu menu = new Menu();
			menu.setId(menuId);
			menuList.add(menu);
		}
	}

	public String getMenuIds() {
		return StringUtils.join(getMenuIdList(), ",");
	}
	
	public void setMenuIds(String menuIds) {
		menuList = Lists.newArrayList();
		if (menuIds != null){
			String[] ids = StringUtils.split(menuIds, ",");
			setMenuIdList(Collections2.transform(Lists.newArrayList(ids), new Function<String, Long>() {
				@Override
				public Long apply(String s) {
					return Long.valueOf(s);
				}
			}));
		}
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
