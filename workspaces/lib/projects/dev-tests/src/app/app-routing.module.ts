import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { SelectionExamplesComponent } from './pages/selection-examples/selection-examples.component';
import { SortingExamplesComponent } from './pages/sorting-examples/sorting-examples.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
        title: 'Examples',
    },
    {
        path: 'pagination',
        component: PaginationExamplesComponent,
        title: 'Pagination',
    },
    {
        path: 'row-selection',
        component: SelectionExamplesComponent,
        title: 'Row Selection',
    },
    {
        path: 'sorting',
        component: SortingExamplesComponent,
        title: 'Sorting',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
