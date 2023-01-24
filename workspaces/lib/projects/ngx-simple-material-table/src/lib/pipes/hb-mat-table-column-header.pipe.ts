import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hbMatTableColumnHeader'
})
export class HbMatTableColumnHeaderPipe implements PipeTransform {

    transform(value: string): string | null {
        if (!value)
            return '';

        let titleSegments: string[] = [];

        let regExp: RegExp = new RegExp(/[A-Z_]/, 'g');
        let match;
        let currentIndex: number = 0;

        while ((match = regExp.exec(value)) !== null) {
            titleSegments.push(value.substring(currentIndex, match.index));
            currentIndex = match.index;
        }

        // push either the last segment (if there are matches) or the entire value when there are no matches
        titleSegments.push(value.substring(currentIndex, value.length));

        let title: string = titleSegments.join(' ');

        return new TitleCasePipe().transform(title);
    }

}
