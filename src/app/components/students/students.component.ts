import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentsArray: Array<any> = [
    {id: 1, name: 'issac'},
    {id: 2, name: 'preston'},
    {id: 3, name: 'colin'},
    {id: 4, name: 'izac'},
    {id: 5, name: 'kayden'},
    {id: 6, name: 'jaxon'},
    {id: 7, name: 'ian'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
