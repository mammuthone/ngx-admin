import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _afs : AngularFirestore) { }

  getPlaces() {
    const locali = this._afs.collection('locali')
    locali.valueChanges().subscribe(res => console.log(res))
    return 'ciao'
  }
}
