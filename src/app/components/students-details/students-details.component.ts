import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent implements OnInit {
id: string | null | undefined;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('my unique id:', this.id)
  }
  goBack() {
    this.location.back()
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
}
