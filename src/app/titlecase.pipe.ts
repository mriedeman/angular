import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'titleCasePipe'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string):string {
        //titlecase logic

        let wordArray = value.split(' ');

        wordArray.forEach((word: string, index: number) => {
            //title case pipe logic
            word = word.toLowerCase();
            
            if (index === 0 || !(word === 'the' || word === 'of' || word === 'is')){
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            wordArray[index] = word;
        });
    return wordArray.join(' ')
    }
}