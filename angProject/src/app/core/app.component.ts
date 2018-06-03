import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './navigation/nav-model';
import {NavService} from './navigation/nav-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'home'
      
      
      },
    {
      displayName: 'IEEE Projects',
      iconName: 'verified_user',
      children:[
        {
          displayName: 'Power Electronics Projects',
          iconName: 'settings_input_svideo',
          route: ''
        },
        {
          displayName: 'Embedded System Projects',
          iconName: 'settings_input_antenna',
          route: ''
        },
        {
          displayName: 'Matlab Projects',
          iconName: 'settings_applications',
          route: ''
        },
        {
          displayName: 'IOT Projects',
          iconName: 'watch',
          route: ''
        },
        {
          displayName: 'Raspberry PI Projects',
          iconName: 'settings_input_composite',
          route: ''
        },
        {
          displayName: 'Java Projects',
          iconName: 'important_devices',
          route: ''
        },
        {
          displayName: '.NET Projects',
          iconName: 'developer_mode',
          route: ''
        },
        {
          displayName: 'Android Projects',
          iconName: 'android',
          route: ''
        }

      ]
    },
    {
      displayName: 'Training',
      iconName: 'loyalty',
      children:[
        {
          displayName: 'Embedded System ',
          iconName: 'settings_input_antenna',
          route: ''
        },
        {
          displayName: 'Matlab',
          iconName: 'settings_applications',
          route: ''
        },
        {
          displayName: 'Web Technologies',
          iconName: 'language',
          route: ''
        },
        {
          displayName: 'SEO',
          iconName: 'settings_cell',
          route: ''
        },
      ]
      
      },
      {
        displayName: 'Courses',
        iconName: 'business',
        children:[
          {
            displayName: 'Image Processing',
            iconName: 'blur_on',
            route: ''
          },
          {
            displayName: 'Network Security',
            iconName: 'security',
            route: ''
          },
          {
            displayName: 'Mobile Computing',
            iconName: 'mobile_friendly',
            route: ''
          },
          {
            displayName: 'Cloud Computing',
            iconName: 'cloud',
            route: ''
          },
          {
            displayName: 'Wireless Communications',
            iconName: 'wifi_tethering',
            route: ''
          },
          {
            displayName: 'Artificial Intelligence',
            iconName: 'graphic_eq',
            route: ''
          },
          {
            displayName: 'Embedded Systems',
            iconName: 'settings_input_antenna',
            route: ''
          },
          {
            displayName: 'VLSI',
            iconName: 'waves',
            route: ''
          },
          {
            displayName: 'Robotics',
            iconName: 'usb',
            route: ''
          }
        ]
        
        },
        {
          displayName: 'Contact Us',
          iconName: 'contact_support',
          route: 'contact'
          
          }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
