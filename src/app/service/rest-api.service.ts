import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(public rest: HttpClient) { 

  }

  /**
   * To post data to JSON server
   * @param data 
   * @returns 
   */

  postData(data:any) : Observable<any> {
    return this.rest.post<any>("http://localhost:3000/posts", data).pipe(map((resp: any) => {
      return resp;
    }));
  }

  /**
   * =To get list from server
   * @returns 
   */
  getData() : Observable<any> {
    return this.rest.get<any>("http://localhost:3000/posts").pipe(map((resp:any) => {
      return resp;
    }))
  }

  /**
   * To delete employee from list
   * @param id 
   * @returns 
   */
  deleteEmp(id:any) {
    return this.rest.delete<any>("http://localhost:3000/posts/"+id).pipe(map((resp:any) => {
      return resp;
    }))
  }

  /**
   * To update the record on employee
   * @param data 
   * @param id 
   * @returns 
   */
  editEmpDetails(data:any,id:any) : Observable<any> {
    return this.rest.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((resp:any) => {
      return resp;
    }))
  }
}
