import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/dev.environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){

  }
  all(){
  // return this.http.get(environment.api+"/products")   //js way
  return this.http.get(`${environment.api}/products`)  //ts way

  }
  get(id:any){
    // return this.http.get(environment.api+"/products")   //js way
    return this.http.get(`${environment.api}/products/${id}`)  //ts way
  
    }

  create(payload:any){
    return this.http.post(`${environment.api}/products`,payload)
  }

 update(payload:any,id:any){
    return this.http.put(`${environment.api}/products/${id}`,payload)
  }
}
