import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss']
})
export class SkillRowComponent implements OnInit {
  @Input() skill: SkillModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
