import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnDestroy {

  public username: string = 'User';//Username será sempre alterado
  public mobileQuery: MediaQueryList;
  private _mobileQueryListenner: () => void;
  //Uma das primeiras partes a serem carregadas é o constructor
  constructor(      
    public media: MediaMatcher,
    private _cdr: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');//Fzendo o ajuste do tamanho da tela
    this._mobileQueryListenner = () => this._cdr.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListenner);
  }
  ngOnDestroy(): void {//Não deixa o programa ficar carregado de lixo, vai excluindo o cash
    this.mobileQuery.removeListener(this._mobileQueryListenner);
  }

}
