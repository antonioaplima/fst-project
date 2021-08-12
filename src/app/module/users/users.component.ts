import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormComponent } from './form/form.component';
import { UserModel } from './model/user.model';
import { UsersService } from './service/users.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  //colocar nomes aqui
  public displayedColumns: string[] = [
    'nome',
    'id',
    'idade',
    'sexo',
    'email',
    'acoes',
  ];
  public dataSource: MatTableDataSource<UserModel> =
    new MatTableDataSource<UserModel>();
  private _onDestroy = new Subject<void>();

  constructor(private _dialog: MatDialog, private _service: UsersService) {}

  ngOnInit(): void {
    this.getData()
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  openForm(id?: string) {
    this._dialog.open(FormComponent, { data: { id } });
  }

  getData() {
    this._service
      .fetchData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((res) => {
        console.log(res)
        this.dataSource.data = res;
      });
  }
}
