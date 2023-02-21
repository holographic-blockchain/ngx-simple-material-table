import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort'; 

import { NgxSimpleMaterialTableModule } from 'ngx-simple-material-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SortingExamplesComponent } from './pages/sorting-examples/sorting-examples.component';
import { ColumnExamplesComponent } from './pages/column-examples/column-examples.component';
import { SelectionExamplesComponent } from './pages/selection-examples/selection-examples.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { FilteringExamplesComponent } from './pages/filtering-examples/filtering-examples.component';

@NgModule({
    declarations: [
        AppComponent,
        SortingExamplesComponent,
        ColumnExamplesComponent,
        SelectionExamplesComponent,
        HomeComponent,
        PaginationExamplesComponent,
        FilteringExamplesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatPaginatorModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule,
        MatSortModule,

        NgxSimpleMaterialTableModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
