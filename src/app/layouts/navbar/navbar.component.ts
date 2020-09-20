import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  strUserName: string='Subhash M'
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement;
  }

  logOut(){

  }

}
