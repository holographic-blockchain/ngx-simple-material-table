import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnExamplesComponent } from './pages/column-examples/column-examples.component';
import { FilteringExamplesComponent } from './pages/filtering-examples/filtering-examples.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { SelectionExamplesComponent } from './pages/selection-examples/selection-examples.component';
import { SortingExamplesComponent } from './pages/sorting-examples/sorting-examples.component';
import { StyleExamplesComponent } from './pages/style-examples/style-examples.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'examples',
        children: [
            {
                path: 'column',
                component: ColumnExamplesComponent,
                title: 'Column Examples',
            },
            {
                path: 'filtering',
                component: FilteringExamplesComponent,
                title: 'Filtering Examples',
            },
            {
                path: 'pagination',
                component: PaginationExamplesComponent,
                title: 'Pagination Examples',
            },
            {
                path: 'row-selection',
                component: SelectionExamplesComponent,
                title: 'Row Selection Examples',
            },
            {
                path: 'sorting',
                component: SortingExamplesComponent,
                title: 'Sorting Examples',
            },
            {
                path: 'styling',
                component: StyleExamplesComponent,
                title: 'Styling Examples',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
