import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesDataService {
  ROLES_API_URL = 'http://localhost:9999/rest/roles/';

  constructor(private http: HttpClient) { }

  getAllRoles() {
    return this.http.get(this.ROLES_API_URL);
  }

  getRole(roleId) {
    return this.http.get(this.ROLES_API_URL + roleId);
  }

  addRole(newRole) {
    return this.http.post(this.ROLES_API_URL, newRole);
  }

  updateRole(updatedRole) {
    return this.http.put(this.ROLES_API_URL, updatedRole);
  }

  deleteRole(roleId) {
    return this.http.delete(this.ROLES_API_URL + roleId);
  }

}
