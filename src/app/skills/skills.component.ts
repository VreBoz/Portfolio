import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Array<any> = [
    { name: 'Angular', img: '../../assets/skills-photos/Angular.png' },
    { name: 'Typescript', img: '../../assets/skills-photos/ts.png' },
    { name: 'JavaScript', img: '../../assets/skills-photos/Javascript.png' },
    { name: 'HTML', img: '../../assets/skills-photos/html.png' },
    { name: 'Firebase', img: '../../assets/skills-photos/firebase.png' },
    { name: 'GIT', img: '../../assets/skills-photos/git.png' },
    { name: 'CSS', img: '../../assets/skills-photos/css.png' },
    { name: 'Material design', img: '../../assets/skills-photos/Frame.png' },
    { name: 'Rest-Api', img: '../../assets/skills-photos/api.png' },
    { name: 'Scrum', img: '../../assets/skills-photos/scrum.png' }
];
}
