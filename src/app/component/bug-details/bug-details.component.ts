import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit{

  bugId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bugId = this.route.snapshot.paramMap.get('id') ?? '';
    // Perform actions based on the bug ID
  }
}






