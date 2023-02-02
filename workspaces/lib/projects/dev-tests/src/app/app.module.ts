import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSimpleMaterialTableModule } from 'ngx-simple-material-table';
import { ExamplesComponent } from './pages/examples/examples.component';
import { SelectionExamplesComponent } from './pages/selection-examples/selection-examples.component';
import { SortingExamplesComponent } from './pages/sorting-examples/sorting-examples.component';

@NgModule({
    declarations: [
        AppComponent,
        ExamplesComponent,
        SelectionExamplesComponent,
        SortingExamplesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule,
        MatSortModule,

        AppRoutingModule,

        NgxSimpleMaterialTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
