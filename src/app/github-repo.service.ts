import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubRepoService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<UserData[]> {
    return this.http.get<UserData[]>('https://api.github.com/users');
  }

  getReposByLogin(login: string): Observable<UserRepos[]> {
    return this.http.get<UserRepos[]>(
      `https://api.github.com/users/${login}/repos`
    );
  }
}

export interface UserData {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UserRepos {
  html_url: string;
  name: string;
  id: number;
}
