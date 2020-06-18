import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  
  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    },
    {
      "Id":2,
      "Name":"Barila Maakarouni",
      "Type":"House",
      "Price":1000000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
