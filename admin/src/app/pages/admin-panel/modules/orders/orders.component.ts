import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTableModule, MatButtonModule,CurrencyPipe,MatDialogModule,UpperCasePipe, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
   orders:any[]=[
    {
      orderid:1,
      product_name:"Product 1",
      price:230,
      date: new Date(),
      status:"Done"
    },
    {
      orderid:2,
      product_name:"Product 1",
      price:230,
      date: new Date(),
      status:"Done"
    },
    {
      orderid:3,
      product_name:"Product 1",
      price:230,
      date: new Date(),
      status:"Done"
    }
   ];
   displayedColumns: string[] = ['orderid','product_name', 'date', "status", 'actions'];
   deleteOrder(order:any){

   }
}
