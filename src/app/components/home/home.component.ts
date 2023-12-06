import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MontyHallService } from '../../services/monty-hall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gameForm!: FormGroup;
  isGameCountError = false;
  winningChance = 0;
  isLoading = false
  isResponseError = false;

  constructor(private formBuilder: FormBuilder,
    private montyHallService: MontyHallService) {
  }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      gameCount: [0, Validators.required],
      gameMode: ['1', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    this.winningChance = 0;
    const gameCount = +form.value.gameCount;
    const gameMode = +form.value.gameMode;

    if (gameCount === 0 || !form.valid) {
      this.isGameCountError = true;
      return;
    }

    this.isGameCountError = false;
    this.isLoading = true;
    this.isResponseError = false;

    this.montyHallService.getWinningChance(gameMode, gameCount).subscribe({
      next: (res: any) => {
        this.winningChance = Math.round(res * 100) / 100;
      },
      error: (err: any) => {
        this.isResponseError = true;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
