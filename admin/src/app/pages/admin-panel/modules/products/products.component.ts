import { CurrencyPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AddProductDialogComponent } from '../../../../_shared/components/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTableModule, MatButtonModule,CurrencyPipe,MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private dialog: MatDialog) {}

  products: any[] = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 14.99 },
    { name: 'Product 3', price: 19.99 },
  ];

  displayedColumns: string[] = ['name', 'price', 'delete','upload','date'];

  addProduct() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.products.push(result);
      }
    });
  }
  deleteProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }
}
