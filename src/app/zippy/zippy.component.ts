import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  @Input('title') title: any;

  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
