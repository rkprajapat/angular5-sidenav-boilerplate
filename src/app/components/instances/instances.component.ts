import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import { InstanceService } from 'app/services/instance.service';
import { Instance } from 'app/interfaces/instance';


@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})
export class InstancesComponent implements OnInit {
  instances: Instance[];
  tableSource: any;
  displayedColumns = ['id', 'name', 'active'];
  selectedInstance: Instance;

  constructor(private instanceService: InstanceService) { }

  // Load all instances
  ngOnInit() {
    this.getAll();
  }

  // Table filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.tableSource.filter = filterValue;
  }

  // Default click behaviour on table
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  // Load all instances
  getAll(): void {
    this.instanceService.getAll()
      .subscribe(data => {
        this.instances = data.map(i => JSON.parse(i));
        this.tableSource = new MatTableDataSource(this.instances);
        console.log(this.instances);
      },
        error => { console.error(error); });
  }

  // select an instance
  onSelect(instance: Instance): void {
    this.selectedInstance = instance;
    // this.instanceService.getOne(instance.id).subscribe(data => this.selectedInstance = data);
  }


}
