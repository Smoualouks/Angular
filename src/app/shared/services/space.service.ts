import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Space } from '../interfaces/space';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  private _baseUrl = environment.urlApi + '/space/limit';
  spaces$: any;

  constructor(private _http: HttpClient) {}
  public findAll(){
    return this._http.get<Space[]>(this._baseUrl);
  }
}
