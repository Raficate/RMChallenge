import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Ejercicio } from '../interfaces/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: AngularFirestore) { }

  getCollectionPesos(): Observable<Ejercicio[]> {
    return this.firestore.collection<Ejercicio>('pesos').valueChanges({ idField: 'id' });
  }

  getCollectionDistancias(): Observable<Ejercicio[]> {
    return this.firestore.collection<Ejercicio>('distancias').valueChanges({ idField: 'id' });
  }
  getCollectionBodyBuilding(): Observable<Ejercicio[]> {
    return this.firestore.collection<Ejercicio>('bodybuilding').valueChanges({ idField: 'id' });
  }

  getCollectionDesafios(): Observable<Ejercicio[]> {
    return this.firestore.collection<Ejercicio>('desafios').valueChanges({ idField: 'id' });
  }

  getCollectionPendiente(): Observable<Ejercicio[]> {
    return this.firestore.collection<Ejercicio>('pendiente').valueChanges({ idField: 'id' });
  }

  getDocument(collectionName: string, documentId: string): Observable<any> {
    return this.firestore.collection(collectionName).doc(documentId).valueChanges();
  }

  addDocument(collectionName: string, data: any): Promise<any> {
    return this.firestore.collection(collectionName).add(data);
  }

  updateDocument(collectionName: string, documentId: string, data: any): Promise<void> {
    return this.firestore.collection(collectionName).doc(documentId).update(data);
  }

  deleteDocument(collectionName: string, documentId: string): Promise<void> {
    return this.firestore.collection(collectionName).doc(documentId).delete();
  }

  // getJercicios(): Observable<Ejercicio[]>{
  //   const orderRef = collection(this.firestore, 'ejercicios');
  //   return new Observable<Ejercicio[]>(observer => {
  //     getDocs(orderRef)
  //       .then(querySnapshot => {
  //         const ejercicios: Ejercicio[] = [];
  //         querySnapshot.forEach(doc => {
  //           ejercicios.push({ id: doc.id, ...doc.data() } as Ejercicio);
  //         });
  //         observer.next(ejercicios);
  //         observer.complete();
  //       })
  //       .catch(error => {
  //         observer.error(error);
  //       });
  //   });
  // }

  // addEjercicio(ejercicio: Ejercicio) {
  //   const wordRef = collection(this.firestore, 'ejercicios');
  //   return addDoc(wordRef, ejercicio)
  // }


}
