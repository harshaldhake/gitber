import { Component, OnInit } from '@angular/core';
import { GithubService} from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GithubService]
})
export class HomeComponent implements OnInit {
 userinfo: any[] = [];
 username: string;
 repositories: any[] [];

 constructor(private githubService: GithubService ) { }

  ngOnInit() {
  }

  getUserInfo(event){
    this.userinfo = event;
    this.username = event.username;
  }

}
