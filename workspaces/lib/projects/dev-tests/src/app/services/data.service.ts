import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { DataTypesEntity } from '../models/data-types-entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    gridData: DataTypesEntity[] = [
        {
            'id': 1,
            'string1': 'Lorem ipsum',
            'string2': 'dolor sit',
            'stringWithALongName': 'Enim ut tellus elementum sagittis vitae',
            'number1': 999,
            'dateDate': DateTime.now().minus({ months: 1 }).toJSDate(),
            'dateString': DateTime.now().minus({ months: 1 }).toISO(),
        },
        {
            'id': 2,
            'string1': 'Consequat',
            'string2': 'esse cillum',
            'stringWithALongName': 'Integer eget aliquet nibh',
            'number1': 156,
            'dateDate': DateTime.now().minus({ days: 3 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 3 }).toISO(),
        },
        {
            'id': 3,
            'string1': 'Ut labore',
            'string2': 'dolor sit',
            'stringWithALongName': 'Euismod lacinia at quis',
            'number1': 0,
            'dateDate': DateTime.now().minus({ hours: 5 }).toJSDate(),
            'dateString': DateTime.now().minus({ hours: 5 }).toISO(),
        },
        {
            'id': 4,
            'string1': 'Viverra suspendisse potenti',
            'string2': 'ut labore',
            'stringWithALongName': null,
            'number1': 1597361,
            'dateDate': DateTime.now().minus({ days: 2 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 2 }).toISO(),
        },
        {
            'id': 5,
            'string1': 'Blandit aliquam',
            'string2': 'nunc non blandit',
            'stringWithALongName': 'Massa vitae tortor condimentum lacinia quis',
            'number1': 48916,
            'dateDate': DateTime.now().minus({ minutes: 8 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 8 }).toISO(),
        },
        {
            'id': 6,
            'string1': 'Fringilla ut morbi tincidunt',
            'string2': 'augue interdum',
            'stringWithALongName': 'Sapien nec sagittis aliquam malesuada',
            'number1': 78148,
            'dateDate': DateTime.now().minus({ days: 12, hours: 3 }).toJSDate(),
            'dateString': DateTime.now().minus({ days: 12, hours: 3 }).toISO(),
        },
        {
            'id': 7,
            'string1': 'Risus commodo',
            'string2': 'viverra maecenas',
            'stringWithALongName': 'A cras semper auctor neque vitae tempus',
            'number1': 12,
            'dateDate': DateTime.now().minus({ hours: 7 }).toJSDate(),
            'dateString': DateTime.now().minus({ hours: 7 }).toISO(),
        },
        {
            'id': 8,
            'string1': 'Blandit aliquam',
            'string2': 'faucibus pulvinar',
            'stringWithALongName': 'Duis ultricies lacus sed turpis tincidunt',
            'number1': 5806612,
            'dateDate': DateTime.now().minus({ minutes: 34 }).toJSDate(),
            'dateString': DateTime.now().minus({ minutes: 34 }).toISO(),
        },
    ];
}
