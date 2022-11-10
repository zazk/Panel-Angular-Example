import { Component, OnInit } from '@angular/core';
import { Service } from '../../../../models/service';
import { ServicesService } from '../../../../data/services/services.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {

  services:Service[] = [];

  constructor( private serviceService:ServicesService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(s => this.services = s)
  }

}
