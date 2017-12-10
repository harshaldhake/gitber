import { Injectable } from '@angular/core';
import { RequestOptions, Http,  Headers,  Response} from '@angular/http';
import { API } from '../config/api.config';
import { OAUTH } from '../config/oauth.config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { contentHeaders } from './header'


@Injectable()
export class GithubService {

constructor(private http: Http) {}

  getUser(userName): Observable<any> {
    return this.http.get(API + '/users/' + userName + OAUTH,  {headers: contentHeaders })
       .map(res => {
        let obj = res.json();
          const newObj = {
            username: obj.login,
            avatar: obj.avatar_url,
            name: obj.name,
            company: obj.company,
            blog: obj.blog,
            location: obj.location,
            email: obj.email,
            hireable: obj.hireable,
            bio: obj.bio,
            repos: obj.public_repos,
            followers: obj.followers,
            joined: obj.created_at
           };
           return newObj;
        })
       .catch(this.handleError);
  }

  getRepos(userName): Observable<any>{
    return this.http.get(API + '/users/' + userName +  '/repos' +  OAUTH,  {headers: contentHeaders })
    .map(res =>  res.json())
    .catch(this.handleError);
  }

  getRepoReadMe(userName,repoName): Observable<any>{
    return this.http.get(API + '/repos/' + userName +  '/'  + repoName + '/readme' +  OAUTH,  {headers: contentHeaders })
    .map(res =>  res.json())
    .catch(this.handleError);
  }


  getOrgs(org): Observable<any>{
    return this.http.get(API + '/orgs/' + org +  '/members' +  OAUTH,  {headers: contentHeaders })
    .map(res => {
        let obj = res.json();
        console.log(obj);
        let newObj = [];
        for(let i=0; i<obj.length; i++)
        {
          newObj.push({'username': obj[i].login})
        }
      return newObj;
    })
    .catch(this.handleError);
  }

    handleError(error: any) {
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
