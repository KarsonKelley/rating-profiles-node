import { Component } from '@angular/core';
import { IssueService } from 'src/app/service/issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private issueService: IssueService) { }

}
