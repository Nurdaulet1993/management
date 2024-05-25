import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidebarOpen = signal<boolean>(true);

  toggleSidebar() {
    this.sidebarOpen()
      ? this.sidebarOpen.set(false) : this.sidebarOpen.set(true)
  }
}
