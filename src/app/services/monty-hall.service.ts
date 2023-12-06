import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {

  constructor(private httpclient: HttpClient) { }

  public getWinningChance(gameMode : number,gameCount:number){
    return this.httpclient.get(`http://localhost:5000/api/montyhall/${gameMode}/${gameCount}`);
  }
}
