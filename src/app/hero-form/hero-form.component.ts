import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements AfterViewInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  @ViewChild('heroForm') hForm: any;
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.hForm.form);
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  ngAfterViewInit() {
    console.log(this.hForm.form);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return this.model;
  }
  get formData() {
    return JSON.stringify(!!this.hForm && this.hForm.form);
  }
}
