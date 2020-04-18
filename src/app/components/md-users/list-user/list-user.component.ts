import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {  
  
    this.userService.getAll().subscribe((res:any[])=> {
      this.users = res['data']
      console.log(res)
    })
  }
}
