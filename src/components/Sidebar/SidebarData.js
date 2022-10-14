
import icon1 from "../icons/home-icons/clicked-icons/icon-2_gauge.svg";
import icon2 from "../icons/home-icons/clicked-icons/icon-2_gauge.svg";
import icon3 from "../icons/home-icons/clicked-icons/icon-3_devices.svg";

import icon1Clicked from "../icons/home-icons/not-clicked-icons/icon-2_gauge.svg";
import icon2Clicked from "../icons/home-icons/not-clicked-icons/icon-2_gauge.svg";
import icon3Clicked from "../icons/home-icons/not-clicked-icons/icon-3_devices.svg";



export const SidebarData = [
  {
    title: 'Dasboard',
    path: '/',
    icon: icon1,
    iconClicked: icon1Clicked,
    cName: 'nav-text',
    selectedcName: 'nav-text focus'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: icon2,
    iconClicked: icon2Clicked,

    cName: 'nav-text',
    selectedcName: 'nav-text focus'
  },
  {
    title: 'Products',
    path: '/products',
    icon: icon3,
    iconClicked: icon3Clicked,
    cName: 'nav-text',
    selectedcName: 'nav-text focus'
  },
 
];
