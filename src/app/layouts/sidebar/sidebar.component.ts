import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu = '';
  showSubMenu = '';
  strLoginUser = '';
  public sidebarnavItems: any[]=[
    {
      path: '',
      title: 'Admin',
      icon: 'fa fa-user',
      class: 'has-arrow',
      visible: false,
      submenu: []
    },
    {
      path: '',
      title: 'Service',
      icon: 'fa fa-user',
      class: 'has-arrow',
      visible: false,
      submenu: []
    },
    {
      path: '',
      title: 'User',
      icon: 'fa fa-user',
      class: 'has-arrow',
      visible: false,
      submenu: [
          {
              path: '/layout/user/add-user',
              title: 'Add User',
              icon: '',
              class: 'no-arrow',
              visible: false,
              submenu: []
          },
          {
            path: '/layout/user/list-user',
            title: 'User List',
            icon: '',
            class: 'no-arrow',
            visible: false,
            submenu: []
        }
      ]
    },
    {
      path: '',
      title: 'Customer',
      icon: 'fa fa-user',
      class: 'has-arrow',
      visible: false,
      submenu: [
          {
              path: '',
              title: 'Add Customer',
              icon: '',
              class: 'no-arrow',
              visible: false,
              submenu: []
          },
          {
            path: '',
            title: 'Customer List',
            icon: '',
            class: 'no-arrow',
            visible: false,
            submenu: []
        }
      ]
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  toggle(sidebarnavItem){
    sidebarnavItem.visible = !sidebarnavItem.visible
  }

  navigate(path) {
    console.log(path);
    
    // this.router.navigateByUrl(path)
  }

}
