import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<any> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
  }

  async loadBikesFromJson() {
    this.bikes = await this.loadBikesFromJson();
    console.log('this.bikes from ngOninit...'), this.bikes); 
    const bikes = await this.http.get('assets/inventory.json');.toPromise();
    return bikes.json();
  }

}
