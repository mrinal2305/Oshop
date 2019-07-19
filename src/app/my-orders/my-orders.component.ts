import { Component, OnInit } from '@angular/core';
import { Order} from '../shared/models/order-item';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders : Order[];
  constructor(private orderService : OrderService) {
   }

  getOrder(){
    
  }
  async ngOnInit() {
    (await this.orderService.getOrderOfLoginUser()).subscribe((data : Order[]) => {
      this.orders = data;
      
    });
  }

}