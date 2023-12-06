import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {

  API_BASE_URL ="http://localhost:5000/api";
  
  constructor(private httpclient: HttpClient) { }

  public getWinningChance(gameMode : number,gameCount:number){
    return this.httpclient.get(`${this.API_BASE_URL}/montyhall/${gameMode}/${gameCount}`);
  }
}
