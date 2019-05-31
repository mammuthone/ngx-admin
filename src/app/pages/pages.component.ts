import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = {}

  $locali: AngularFirestoreCollection<any[]>;
  locale: NbMenuItem;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    var $locali = this.afs.collection('locali').valueChanges();
    $locali.subscribe(res => {

      const list = res.map(e => { return { title: e['nome'] } })

      console.log(list)
      this.menu = MENU_ITEMS;
    });
  }

}
