import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './pages/examples/examples.component';
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
