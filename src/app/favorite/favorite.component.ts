import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


export interface FavoriteChangedEventArgs {
  newValue: boolean
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  //Angular emulates shadow dom, applies an attribute to the component so it can post-process the css styles so they aren't overwritten
  //encapsulation: ViewEncapsulation.Emulated
  // alternative method for providing input variables to a component
  //inputs: [ isSelected']
})
export class FavoriteComponent {
  //if you are building re-usable components give the name of your parameters an alias to keep the contract of your components stable.
  //Input decorator specifies that the property is an input parameter to your component
  //
  @Input('is-favorite') isSelected: boolean = false;
  
  //initialise field to an instance of the EventEmitter class
  //
  @Output('change') click = new EventEmitter();

  constructor() {}

  onClick () {
    this.isSelected = !this.isSelected;
    //publish an event, notify others that something has happened
    this.click.emit({
      newValue: this.isSelected
    });
  
   }
}
