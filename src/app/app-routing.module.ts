import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { EditUserComponent } from './components/md-users/edit-user/edit-user.component';
import { AddUserComponent } from './components/md-users/add-user/add-user.component';
import { ListUserComponent } from './components/md-users/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo:'/users', pathMatch:'full' },

  { path: "users", children:[
    { path:"", component: ListUserComponent },
    { path:"create", component: AddUserComponent },
    { path: "id/edit", component: EditUserComponent },
  ]},

  { path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
