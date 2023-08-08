import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  constructor(private scrollService: ScrollService) { }
  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }
}
