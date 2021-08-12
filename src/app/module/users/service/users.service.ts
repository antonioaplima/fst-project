import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { UsersModule } from '../users.module';

const UserTB = 'UserTB';

@Injectable()
export class UsersService {
  constructor(private _store: AngularFirestore, private _snack: MatSnackBar) {}
  addUser(user: UserModel) {
    delete user.id;
    return this._store
      .collection<UserModel>(UserTB)
      .doc()
      .set(user)
      .then((res) => {
        console.log(res);
        this._snack.open('Usuário cadastrado com sucesso');
      })
      .catch((err) => {
        this._snack.open('Ocorreu um erro ao cadastrar o usuário');
        console.log(err);
      });
  }

  fetchData(): Observable<UserModel[]> {
    return this._store
      .collection<UserModel>(UserTB)
      .valueChanges({ idField: 'id' });
  }

  fetchByID(id: string): Promise<UserModel> {
    return this._store
      .collection<UserModel>(UserTB)
      .doc(id)
      .get()
      .toPromise()
      .then((res) => {
        if(res.exists){
          return res.data();
        }
        this._snack.open("Usuário não encontrado", "ok");
        return undefined
      });
  }
}
