import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  estacionamientoURL = "http://localhost:3000/estacionamiento";

  getEstacionamiento(){
    return this.http.get(this.estacionamientoURL);
  }
  updateEstacionamieno(object: any, _id: String){
    return this.http.put(this.estacionamientoURL + "/" + _id, object);
  }
}
