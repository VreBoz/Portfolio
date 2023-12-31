import { Component } from '@angular/core';

@Component({
  selector: 'app-show-portfolio',
  templateUrl: './show-portfolio.component.html',
  styleUrls: ['./show-portfolio.component.scss']
})
export class ShowPortfolioComponent {
  projects = [
    {
      imgSrc: '../../assets/portfolio-photos/join-laptop.png',
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://vrebo.de/join/',
      github: 'https://github.com/VreBoz/Join'
    
    },
    {
      imgSrc: '../../assets/portfolio-photos/polloLocoLaptop.png',
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to fight against the killer Chicken.',
      link: 'https://vrebo.de/elPolloLoco/',
      github: 'https://github.com/VreBoz/ElPolloLoco'
    },
    {
      imgSrc: '../../assets/portfolio-photos/dex.png',
      title: 'Pokédex',
      technologies: 'JypeScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'https://vrebo.de/pokedex/',
      github: 'https://github.com/VreBoz/pokedexByMe'
    },
    // Weitere Projekte hier
  ];

  openLink(url: string) {
    window.open(url, '_blank');
}

}
