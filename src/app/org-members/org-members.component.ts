import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService} from '../../services';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'org-members',
  templateUrl: './org-members.component.html',
  styleUrls: ['./org-members.component.css'],
  providers: [GithubService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgMembersComponent implements OnInit {
  @Output() outUser = new EventEmitter<any>();
  searchForm: FormGroup;
  orgMembers: any[] = [];
  users: any[] = [];

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
        console.log(this.searchForm.value.username);
      } else {
        this.githubService.getOrgs(this.searchForm.value.username).subscribe(orgMembers => {
            this.orgMembers = orgMembers;
            console.log('org', this.orgMembers);
        }, (error: Error) => {
          console.log(error);
        });
      }
}

callNewUser(username){
  this.githubService.getUser(username).subscribe(users => {
    this.users = users;
    console.log('indeisde', this.users);
    this.outUser.emit(this.users);
    this.cd.markForCheck();
}, (error: Error) => {
  console.log(error);
});
}

}
