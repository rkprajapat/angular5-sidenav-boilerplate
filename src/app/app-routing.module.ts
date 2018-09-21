import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from 'app/components/home/home.component';
import { AuthGuard } from 'app/guard/auth.guard';
import { InstancesComponent } from 'app/components/instances/instances.component';
import { NewInstanceComponent } from 'app/components/instances/new-instance/new-instance.component';
import { UsersComponent } from 'app/components/users/users.component';
import { UserDetailsComponent } from 'app/components/users/user-details/user-details.component';
import { LoginComponent } from 'app/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '/',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'instances',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: InstancesComponent },
      { path: ':id', component: NewInstanceComponent }
    ]
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UsersComponent },
      { path: ':instance_id/:id', component: UserDetailsComponent },
      { path: 'new', component: UserDetailsComponent }
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }, // <-- debugging purposes only
    // {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
