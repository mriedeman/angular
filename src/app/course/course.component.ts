import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
      title = "List of courses";
      courses;
      imageUrl = "../assets/HD-images-of-nature-download.jpg";
      colSpan = 2;
      isActive = false;
      email: any= 'donkey@example.com';
      text = "Lorem Ipsum is simply dummy text of the printing and typeset community."

      course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.88,
        releaseDate: new Date(2023, 6, 7)
      }
      // when you use the new operator in your class, you have tightly coupled your class to that class
      // constructor () {
      //   let service = new CoursesService();
      //   this.courses = service.getCourses();
      // }

     //when you add the dependency as a parameter of a constructor, you have decoupled that class from that dependency
      constructor (service: CoursesService) { 
          this.courses = service.getCourses();
      }
      getTitle() {
        return this.title
      }

      onSave($event: any) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
      }

      onDivClicked() {
        console.log("Div was clicked")
      }

      onKeyUp($event: any) {
        if ($event.keyCode === 13) console.log("ENTER was pressed")
      }

      onKeyUp2() {
        console.log("ENTER was pressed")
      }

      onKeyUp3($event: any) {
        console.log($event.target.value);
      }
      onKeyUp4(email: any) {
        console.log(email);
      }

      onKeyUp5() {
        console.log(this.email)
      }
}
