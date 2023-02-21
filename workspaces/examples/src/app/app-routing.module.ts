import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnExamplesComponent } from './pages/column-examples/column-examples.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { SelectionExamplesComponent } from './pages/selection-examples/selection-examples.component';
import { SortingExamplesComponent } from './pages/sorting-examples/sorting-examples.component';

const routes: Routes = [
    {
        path: 'examples',
        children: [
            {
                path: '',
                component: ExamplesComponent,
                title: 'Other Examples',
            },
            {
                path: 'column',
                component: ColumnExamplesComponent,
                title: 'Column Examples',
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
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
