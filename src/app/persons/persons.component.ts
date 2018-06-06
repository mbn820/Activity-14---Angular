import { Component, OnInit } from '@angular/core';
import { PersonsDataService } from '../persons-data.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: any;

  constructor(private personsDataService: PersonsDataService) { }

  ngOnInit() {
    this.loadAllPersons();
  }

  loadAllPersons() {
    this.personsDataService
        .getAllPersons()
        .subscribe(persons => this.persons = persons);
  }

  deletePerson(personId) {
    const decision = confirm('Are you sure?');
    if(decision) {
      this.personsDataService
        .deletePerson(personId)
        .subscribe(() => this.loadAllPersons());
    }
  }

}
