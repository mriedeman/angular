import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  tweet = {
    body: "Someone's tweet text",
    isLiked: false,
    likesCount : 10
  }
    courses = [3,4]
    canSave = true

    viewMode='map';
    animals: any = [];



    //SAFE TRAVERSAL OPERATOR
    task = {
      title: 'Review applications',
      assignee: {
        name: 'Michael Riedeman',
        name2: null
      }
    }
    // animals = [
    //   {id: 1, name: 'bear'},
    //   {id: 2, name: 'lion'},
    //   {id: 3, name: 'zebra'},
    //   {id: 4, name: 'hyena'},
    // ]

    // onAdd() {
    //   this.animals.push({ id: 4, name: 'cat'})
    // }

    // onRemove(animal :any) {
    //   let index = this.animals.indexOf(animal);
    //   this.animals.splice(index, 1)
    // }

    onChange(animal: any) {
      animal.name = 'UPDATED'
    }

    loadAnimals() {
      this.animals = [
        {id: 1, name: 'bear'},
        {id: 2, name: 'lion'},
        {id: 3, name: 'zebra'},
        {id: 4, name: 'hyena'},
      ]
    }

    trackAnimal(index: number, animal:any) {
      return animal ? animal.id : undefined
    }
}
