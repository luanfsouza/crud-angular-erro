import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name','category'];

  CoursesService: CoursesService;

  constructor(){
    // this.courses = [];
    this.CoursesService = new CoursesService();
    this.courses = this.CoursesService.list();
  }

  ngOnInit(): void {

  }
}
