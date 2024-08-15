import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';



@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatButtonModule,RouterLink,RouterOutlet,NgForOf],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  navItems = [
    { name: 'Products', icon: 'inventory',routerlink:"/admin/products" },
    { name: 'Orders', icon: 'shopping_cart',routerlink:"/admin/orders" },
  ];

  selectedNavItem = this.navItems[0];

  onNavItemClick(item: any) {
    this.selectedNavItem = item;
  }

  logout(){}

  toggleSidenav() {
    const sidenav = document.querySelector('.sidenav') as HTMLElement;
    sidenav.classList.toggle('opened');
  }
}
