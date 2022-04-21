import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getAllData().subscribe((data) => {
      console.log(data);
    });
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age,
    };
    this.userService.postData(body).subscribe((response) => {
      console.log(response);
    });
  }

  updateData(value: any) {
    let body = {
      name: value.name,
      age: value.age,
    };

    this.userService
      .updateData(body, `62619f55a165224ebadd9a16`)
      .subscribe((response) => {
        console.log(response);
      });
  }

  delete() {
    this.userService
      .deleteData(`6261a613a165224ebadd9a2d`)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
