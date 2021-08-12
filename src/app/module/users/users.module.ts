import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { UsersService } from './service/users.service';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    FormComponent
  ],
  imports: [
    CommonModule,//tres necessários para criar formulário
    FormsModule,
    ReactiveFormsModule,
    
    UsersRoutingModule, 
    MaterialModule
  ],
  exports:[
    UsersComponent
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
