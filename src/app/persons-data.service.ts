import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsDataService {
  REST_API_URL = 'http://localhost:9999/rest/persons/';

  constructor(private http: HttpClient) { }

  getAllPersons() {
    return this.http.get(this.REST_API_URL);
  }

  deletePerson(personId) {
    return this.http.delete(this.REST_API_URL + personId);
  }

}
