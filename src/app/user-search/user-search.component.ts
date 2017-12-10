

import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { GithubService} from '../../services';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [GithubService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent implements OnInit {
  @Output() outUser = new EventEmitter<any>();
  searchForm: FormGroup;
  recentSearchArray: any[] = [];
  users: any[];
  msgs: any[] = [];

  constructor(private _router: Router,
    private fb: FormBuilder,
    private githubService: GithubService,
    private cd: ChangeDetectorRef) { }

    ngOnInit() {
      this.searchForm = this.fb.group({
          'username': new FormControl('', Validators.required),
      });
    }


    Search() {
      if (this.searchForm.value.username === '' || typeof this.searchForm.value.username === 'undefined' ) {
        this.showInfo('Please enter user name');
      } else {
        this.recentSearchArray.push(this.searchForm.value.username);
        this.githubService.getUser(this.searchForm.value.username).subscribe(users => {
           this.users = users;
            this.outUser.emit(this.users);
            this.cd.markForCheck();
        }, (error: Error) => {
          console.log(error);
          this.showInfo('User does not exist in github.');
        });
      }
}

callNewUser(username)
{
      this.githubService.getUser(username).subscribe(users => {
        this.users = users;
        if(this.users.length >= 1)
        {
          console.log('indeisde', this.users);
          this.outUser.emit(this.users);
          this.cd.markForCheck();
        } else {
          this.showInfo('User does not exist in github.')
        }
    }, (error: Error) => {
      console.log(error);
      this.showInfo('User does not exist in github.')
    });
}

showInfo(msg) {
  this.msgs.push({
    severity: 'info',
    summary: 'User Unavailable',
    detail: msg
  });
}

deleteItem(recentItem){
  const index = this.recentSearchArray.indexOf(recentItem);
  console.log(index);
  this.recentSearchArray.splice(index, 1);
  this.cd.markForCheck();
  console.log(this.recentSearchArray);
}

}
