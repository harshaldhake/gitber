import { Component, OnInit , Input, SimpleChanges, OnChanges} from '@angular/core';
import { GithubService} from '../../services';

@Component({
  selector: 'user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css'],
  providers: [GithubService]
})
export class UserRepositoriesComponent implements OnInit, OnChanges {
@Input() user;
repositories: any[] = [];

constructor(private githubService: GithubService) { }

  ngOnInit() {
      if(typeof this.user !== 'undefined')
      { 
        this.githubService.getRepos(this.user).subscribe(repositories => {
          this.repositories = repositories;
          console.log(this.repositories);
        }, (error: Error) => {
          console.log(error);
        });

      } 
    }


    ngOnChanges(changes: SimpleChanges) {
      console.log('test', changes);
      if ( typeof changes['user'].currentValue !== 'undefined'  && changes['user'].firstChange !== true ){
        this.githubService.getRepos(this.user).subscribe(repositories => {
          this.repositories = repositories;
          console.log('test2',this.repositories);
        }, (error: Error) => {
          console.log(error);
        });

      }
     }

}
