import { Component, OnInit } from '@angular/core';
import { GithubRepoService, UserData, UserRepos } from './github-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubRepoService],
})
export class AppComponent implements OnInit {
  title = 'github-api';

  userData: UserData[] = [];
  userRepos: UserRepos[] = [];
  userIsSelected: boolean = false;

  constructor(private githubRepoService: GithubRepoService) {}

  ngOnInit() {
    this.githubRepoService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  getRepos(login: string) {
    this.userIsSelected = true;
    this.githubRepoService.getReposByLogin(login).subscribe((repos) => {
      this.userRepos = repos;
      setTimeout(() => {
        const scroll = document.getElementById('repos');
        scroll?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  }
}
