import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './pages/examples/examples.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
        title: 'Examples',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
