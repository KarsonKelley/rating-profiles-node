import { Component } from '@angular/core';
import { IssueService } from 'src/app/service/issue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private issueService: IssueService) { }

}
