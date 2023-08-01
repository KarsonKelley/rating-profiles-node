import { Component } from '@angular/core';
import { IssueService } from 'src/app/service/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private issueService: IssueService) {

  }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    })
  }

}
