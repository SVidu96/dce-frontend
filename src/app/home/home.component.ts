import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MontyHallService } from '../services/monty-hall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  myForm!: FormGroup;
  isGameCountError = false;
  winningChance = 0;
  isLoading = false
  isResponseError = false;
;

  constructor(private formBuilder:FormBuilder,
              private montyHallService:MontyHallService) {
  }
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      gameCount: ['0', Validators.required],
      gameMode:['1',Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if(form.value.gameCount==0 || !form.valid){
      this.isGameCountError = true
    }
    else{
      this.isGameCountError = false;
      this.isLoading = true;
      this.isResponseError = false;

      this.montyHallService.getWinningChance(form.value.gameMode,form.value.gameCount).subscribe({
        next:(res:any)=> this.winningChance = Math.round(res * 100) / 100,
        error:(err:any) => {this.isResponseError = true; this.isLoading=false},
        complete:()=> this.isLoading = false
      });
    }
  }
}
