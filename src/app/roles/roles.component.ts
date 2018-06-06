import { Component, OnInit } from '@angular/core';
import { RolesDataService } from '../roles-data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: any;

  constructor(private rolesDataService: RolesDataService) { }

  ngOnInit() {
    this.loadAllRoles();
  }

  loadAllRoles() {
    this.rolesDataService
        .getAllRoles()
        .subscribe(roles => this.roles = roles);
  }

  addRole() {
    const newRole = window.prompt('Enter new Role:');
    if(newRole) {
      this.rolesDataService
          .addRole(
            {
              roleName: newRole
            }
          )
          .subscribe(() => this.loadAllRoles());
    }
  }

  updateRole(roleId, oldRoleName) {
    const updatedRole = window.prompt('Change Role Name: ', oldRoleName);
    if(updatedRole) {
      this.rolesDataService
          .updateRole(
            {
              id: roleId,
              roleName: updatedRole
            }
          )
          .subscribe(() => this.loadAllRoles());
    }
  }

  deleteRole(roleId) {
    this.rolesDataService
        .deleteRole(roleId)
        .subscribe(() => this.loadAllRoles());
  }

  sortByRoleName() {
    this.roles.sort((a, b) => {
      return (a.roleName > b.roleName) ? 1 : -1;
    });
  }

  sortById() {
    this.roles.sort((a, b) => {
      return a.id - b.id;
    });
  }

  showRolesDetails(roleId) {
    alert(roleId);
  }

}
