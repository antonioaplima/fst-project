import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/shared/service/form.service';
import { UserModel } from '../model/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public sexos: { id: number; name: string }[] = [
    {
      id: 0,
      name: 'Masculino',
    },
    {
      id: 1,
      name: 'Feminino',
    },
    {
      id: 2,
      name: 'Prefiro não dizer',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private _service: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _fb: FormBuilder,
    public erroStateMatcher: FormService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group(new UserModel());
    if(this.data.id){
      this.getByID()
    }
  }

  saveUser(){
    if(this.form.valid){
      this._service.addUser(this.form.value)
    }
  }

  getByID(){
    this._service.fetchByID(this.data.id).then(res => {
      this.form.patchValue(res);
    })
  }

}
