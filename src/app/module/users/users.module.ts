import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { UsersService } from './service/users.service';


@NgModule({
  declarations: [
    UsersComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    UsersComponent
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
