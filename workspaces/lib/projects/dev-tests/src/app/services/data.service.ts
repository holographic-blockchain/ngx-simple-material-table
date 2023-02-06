import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { DataTypesEntity } from '../models/data-types-entity';
import { GeneralDataEntity } from '../models/general-data-entity';

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
    pagedGridData: GeneralDataEntity[] = [
        {
            "id": 1,
            "firstName": "Consectetur",
            "lastName": "Voluptate",
            "role": "Proident",
        },
        {
            "id": 2,
            "firstName": "Aliquam",
            "lastName": "Condimentum",
            "role": "Maecenas",
        },
        {
            "id": 3,
            "firstName": "Condimentum",
            "lastName": "Posuere",
            "role": "Morbi",
        },
        {
            "id": 4,
            "firstName": "Dignissim",
            "lastName": "Commodo",
            "role": "Proident",
        },
        {
            "id": 5,
            "firstName": "Volutpat",
            "lastName": "Voluptate",
            "role": "Ultricies",
        },
        {
            "id": 6,
            "firstName": "Turpis",
            "lastName": "Tincidunt",
            "role": "Proident",
        },
        {
            "id": 7,
            "firstName": "Ullamcorper",
            "lastName": "Scelerisque",
            "role": "Maecenas",
        },
        {
            "id": 8,
            "firstName": "Tincidunt",
            "lastName": "Consequat",
            "role": "Ultricies",
        },
        {
            "id": 9,
            "firstName": "Malesuada",
            "lastName": "Dictum",
            "role": "Maecenas",
        },
        {
            "id": 10,
            "firstName": "Adipiscing",
            "lastName": "Porttitor",
            "role": "Proident",
        },
        {
            "id": 11,
            "firstName": "Sollicitudin",
            "lastName": "Tempor",
            "role": "Ultricies",
        },
        {
            "id": 12,
            "firstName": "Fermentum",
            "lastName": "Pretium",
            "role": "Proident",
        },
        {
            "id": 13,
            "firstName": "Malesuada",
            "lastName": "Maecenas",
            "role": "Proident",
        },
        {
            "id": 14,
            "firstName": "Fringilla",
            "lastName": "Porttitor",
            "role": "Ultricies",
        },
        {
            "id": 15,
            "firstName": "Rhoncus",
            "lastName": "Purus",
            "role": "Ultricies",
        },
        {
            "id": 16,
            "firstName": "Faucibus",
            "lastName": "Pellentesque",
            "role": "Maecenas",
        },
        {
            "id": 17,
            "firstName": "Elementum",
            "lastName": "Voluptate",
            "role": "Proident",
        },
        {
            "id": 18,
            "firstName": "Tincidunt",
            "lastName": "Feugiat",
            "role": "Proident",
        },
        {
            "id": 19,
            "firstName": "Consectetur",
            "lastName": "Consequat",
            "role": "Ultricies",
        },
        {
            "id": 20,
            "firstName": "Pretium",
            "lastName": "Ornare",
            "role": "Maecenas",
        },
        {
            "id": 21,
            "firstName": "Vivamus",
            "lastName": "Bibendum",
            "role": "Ultricies",
        },
        {
            "id": 22,
            "firstName": "Proin",
            "lastName": "Pulvinar",
            "role": "Maecenas",
        },
        {
            "id": 23,
            "firstName": "Sollicitudin",
            "lastName": "Venenatis",
            "role": "Proident",
        },
        {
            "id": 24,
            "firstName": "Fringilla",
            "lastName": "Lacus",
            "role": "Proident",
        },
        {
            "id": 25,
            "firstName": "Laoreet",
            "lastName": "Turpis",
            "role": "Ultricies",
        },
        {
            "id": 26,
            "firstName": "Ultrices",
            "lastName": "Iaculis",
            "role": "Proident",
        },
        {
            "id": 27,
            "firstName": "Viverra",
            "lastName": "Bibendum",
            "role": "Ultricies",
        },
        {
            "id": 28,
            "firstName": "Tincidunt",
            "lastName": "Euismod",
            "role": "Proident",
        },
        {
            "id": 29,
            "firstName": "Tristique",
            "lastName": "Egestas",
            "role": "Morbi",
        },
        {
            "id": 30,
            "firstName": "Suspendisse",
            "lastName": "Mattis",
            "role": "Proident",
        },
        {
            "id": 31,
            "firstName": "Malesuada",
            "lastName": "Magna",
            "role": "Proident",
        },

    ];
    observableGridData: Observable<DataTypesEntity[]> = of(this.gridData);
}
