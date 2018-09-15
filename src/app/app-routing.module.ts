import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsSummaryComponent } from 'app/components/projects-summary/projects-summary.component';
import { InstancesComponent } from 'app/components/instances/instances.component';
import { NewInstanceComponent } from 'app/components/instances/new-instance/new-instance.component';
import { UsersComponent } from 'app/components/users/users.component';
import { UserDetailsComponent } from 'app/components/users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'instances',
    children: [
      {path: '', component: InstancesComponent},
      {path: ':id', component: NewInstanceComponent}
    ]
  },
  {
    path: 'users',
    children: [
      {path: '', component: UsersComponent},
      {path: ':instance_id/:id', component: UserDetailsComponent},
      {path: 'new', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }, // <-- debugging purposes only
    // {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
