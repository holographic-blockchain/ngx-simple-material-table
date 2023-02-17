import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    gridData: UserInfo[] = [
        {
            userId: 1,
            firstName: 'Bob',
            lastName: 'Smith',
            age: 26,
            birthDate: new Date(1996, 8, 3),
        },
        {
            userId: 2,
            firstName: 'Cameron',
            lastName: 'McClain',
            age: 37,
            birthDate: new Date(1985, 5, 30),
        },
        {
            userId: 3,
            firstName: 'Katelyn',
            lastName: 'Garza',
            age: 33,
            birthDate: new Date(1989, 4, 29),
        },
        {
            userId: 4,
            firstName: 'Juliette',
            lastName: 'Watkins',
            age: 30,
            birthDate: new Date(1992, 3, 7),
        },
        {
            userId: 5,
            firstName: 'Spencer',
            lastName: 'Torres',
            age: 47,
            birthDate: new Date(1975, 10, 25),
        },
        {
            userId: 6,
            firstName: 'Devin',
            lastName: 'Pruitt',
            age: 59,
            birthDate: new Date(1963, 9, 13),
        },
        {
            userId: 7,
            firstName: 'Hannah',
            lastName: 'Wong',
            age: 19,
            birthDate: new Date(2003, 3, 5),
        },
        {
            userId: 8,
            firstName: 'Madyson',
            lastName: 'Watkins',
            age: 20,
            birthDate: new Date(2002, 5, 11),
        },
    ];
}
