import { Component, OnInit } from '@angular/core';

import { InstanceService } from 'app/services/instance.service';
import { Instance } from 'app/classes/instance';


@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})
export class InstancesComponent implements OnInit {
  instances: Instance[];
  selectedInstance: Instance;

  constructor(private instanceService: InstanceService) { }

  // Load all instances
  ngOnInit() {
    this.getAll();
  }

  // Load all instances
  getAll(): void {
    this.instanceService.getAll()
      .subscribe(data => this.instances = data);
  }

  // select an instance
  onSelect(instance: Instance): void {
    this.selectedInstance = instance;
    this.instanceService.getOne(instance.id).subscribe(data => this.selectedInstance = data);
  }


}
