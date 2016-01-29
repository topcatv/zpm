package org.topcat.zpm.modules.entity;

import javax.persistence.*;

import org.topcat.zpm.common.entity.BaseEntity;
import org.topcat.zpm.common.entity.DataEntity;

@Table(name = "sys_permissions")
public class Permission extends BaseEntity<Permission> {

    private String permission;

    private String description;

    @Override
    public void preInsert() {

    }

    @Override
    public void preUpdate() {

    }

    /**
     * @return permission
     */
    public String getPermission() {
        return permission;
    }

    /**
     * @param permission
     */
    public void setPermission(String permission) {
        this.permission = permission == null ? null : permission.trim();
    }

    /**
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description
     */
    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }
}