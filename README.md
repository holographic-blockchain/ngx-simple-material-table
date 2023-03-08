# ngx-simple-material-table

An Angular library which wraps the Angular Material table component in an easier to use syntax. This is designed to be used
in place of the Material table, so it supports many of the underlying Material objects for functionality instead of
creating its own. However, it is not intended as a 100% functional replacement, so more complex cases may still need to
use the Material table component. See 
[https://material.angular.io/components/table/overview](https://material.angular.io/components/table/overview) for more info.

## Usage Overview

For a basic table, the following markup will render the four columns:

    <hb-mat-table [tableData]="yourData">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

If your data source is a MatTableDataSource (or a compatible DataSource implementation) then the table will automatically
have sorting enabled. Additionally, pagination and row selection are also available using the existing Material
components.

For additional and more detailed examples than those below, download this repository and run the 
workspaces/examples application. This readme only contains more common examples.

- [Setup](#setup)
- [Column Options](#column-options)
- [Table Options](#table-options)
- [API](#api)

## Setup

Your application will need to include the following packages in its package.json file:

- @angular/animations
- @angular/cdk
- @angular/common
- @angular/core
- @angular/material
- ngx-simple-material-table

In your module, you will need to import the following modules:

- import { MatPaginatorModule } from '@angular/material/paginator';
- import { MatTableModule } from '@angular/material/table';
- import { MatSortModule } from '@angular/material/sort'; 
- import { NgxSimpleMaterialTableModule } from 'ngx-simple-material-table';

## Column Options

The 'hb-mat-table-column' element will define a column for the table. A basic use looks like this:

    <hb-mat-table-column name="firstName"></hb-mat-table-column>

This will create a column with header text of 'First Name' and simply output the value of the associated property
('firstName' in this case) from your table data.

### DataType and DataFormat

A column can have a 'dataType'. The options are: 'string' | 'number' | 'date' | 'percent'. The default is 'string', which does
nothing extra. The other data types will have their output sent to the appropriate Angular pipe - the DecimalPipe
for 'number', the DatePipe for 'date', and the PercentPipe for 'percent'. If you are setting the Angular LOCALE_ID globally, 
it will automatically be applied. 

When using one of the non-string data types, you can also specify a 'dataFormat' value. This will get passed to
the pipe. For a number, this is the 'digitsInfo' parameter of the DecimalPipe. For a date, this is the 'format'
parameter of the DatePipe. For a percent, this is the 'digitsInfo' parameter of the PercentPipe. The 'dataFormat' property is optional.

| DataType | Corresponding Pipe | Pipe Parameter for 'dataFormat' | Pipe Reference |
| --- | --- | --- | --- |
| string | none | | |
| number | DecimalPipe | digitsInfo | [https://angular.io/api/common/DecimalPipe](https://angular.io/api/common/DecimalPipe) |
| date | DatePipe | format | [https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe) |
| percent | PercentPipe | digitsInfo | [https://angular.io/api/common/PercentPipe](https://angular.io/api/common/PercentPipe) |

    <hb-mat-table-column name="myNumber" dataType="number" dataFormat="1.1-1"></hb-mat-table-column>
    <hb-mat-table-column name="myDefaultNumber" dataType="number"></hb-mat-table-column>
    <hb-mat-table-column name="myDate" dataType="date" dataFormat="medium"></hb-mat-table-column>
    <hb-mat-table-column name="myDefaultDate" dataType="date"></hb-mat-table-column>
    <hb-mat-table-column name="myDecimalNumber" dataType="percent" dataFormat="1.1-1"></hb-mat-table-column>
    <hb-mat-table-column name="myDefaultDecimalNumber" dataType="percent"></hb-mat-table-column>

### Captions

By default, the name of the column will be used for the column header caption. The first letter will be
capitalized, and every subsequent capital letter will start a new word. So a column name of 'firstName' will
have a header of 'First Name'. To override this behavior, add the 'caption' attribute with the desired text.

    <hb-mat-table-column name="firstName" caption="Friendly Name"></hb-mat-table-column>

### Custom Cell Content

If the cell should display something other than a single property in your object, you can supply a custom
template.

    <hb-mat-table-column name="derived">
        <div *hbMatTableColumnTemplate="let data">
            {{ data.myString }} :: {{ data.myNumber | number }}
        </div>
    </hb-mat-table-column>

The 'data' variable will be the row's data instance, so you have access to all the properties of the specific row.
Note that the column's name, 'derived' in this example, does not need to correspond to an actual property on the
data object.

### Sorting

Sorting is enabled by default. To disable sorting on a specific column, set the 'canSort' property to false.

    <hb-mat-table-column name="firstName" [canSort]="false"></hb-mat-table-column>

### Fixed Columns

To make a column sticky, add the 'isStickyStart' or 'isStickyEnd' property to the column.

        <hb-mat-table-column name="firstName" [isStickyStart]="true"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date" [isStickyEnd]="true"></hb-mat-table-column>

### Footer Row

A footer row can be defined in a similar manner to the custom cell content. A footer template can be added
to each column. Note the table option 'showFooter' which also needs to be set to display a footer row.

    <hb-mat-table [tableData]="yourData"
                  [showFooter]="true>
        <hb-mat-table-column name="firstName">
            <div *hbMatTableFooterTemplate>Average ::</div>
        </hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number">
            <div *hbMatTableFooterTemplate>{{ avgAge | number }}</div>
        </hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

The footer template does not have access to any specific table data through a variable. You will need to defined
your own variable or method in the consuming component.

## Table Options

The table-level element is 'hb-mat-table'. The following are the available table-level options.

### Sticky Header Row

To make the header row sticky, add the 'isHeaderSticky' property to the table.

    <hb-mat-table [tableData]="yourData"
                  [isHeaderSticky]="true>

### Row Selection

Single- and multi-row selection is supported. In both cases, a column is automatically added named 'select' and
will display a Material checkbox. There are four properties dealing with row selection:

- selectionMode - 'none' | 'single' | 'multiple'
- selectionColor - 'primary' | 'accent' | 'warn' - These are the Material themes. When not set it will take your default.
- rowKey - By default, the entire row's data will be the key. If you want the key to be more specific, you
can specify one or more column names as the row key.
- selection - This gives you access to the SelectionModel to see what is selected. This is accessible through
TypeScript.

This is an example using all three of the inputs:

    <hb-mat-table #myTable
                  [tableData]="yourData"
                  [selectionMode]="single"
                  [selectionColor]="primary"
                  [rowKey]="['userId']">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

To access the selection(s), define a view child:

    @ViewChild('myTable') myTable: HbMatTable;

You can then access the selection property:

    myTable.selection.selected

Note that the selected value will be an array of row keys which have been stringified. If you wish to access 
the properties, you will first need to parse it into an object:

    JSON.parse(myTable.selection.selected)[0].userId

For more details on the SelectionModel, view [https://material.angular.io/cdk/collections/overview](https://material.angular.io/cdk/collections/overview).

### Pagination

The Materials paginator component is integrated into this. You can include the paginator element as part of the table
element, or place it outside if you need more control over the layout. Note that this will only work if you are using a
MatTableDataSource or other compatible object.

    <hb-mat-table [tableData]="yourData">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
        <mat-paginator [pageSizeOptions]="[5, 10, 25]"></mat-paginator>
    </hb-mat-table>

When the paginator is placed outside the table element, you will also need to manually attached the paginator to
the data source.

    <hb-mat-table [tableData]="yourData">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>
    <mat-paginator #paginator [pageSizeOptions]="[5, 10, 25]"></mat-paginator>

    @ViewChild('paginator') matPaginator!: MatPaginator;

    ngAfterViewInit(): void {
        this.yourData.paginator = this.matPaginator;
    }

For more information on the Material paginator, see [https://material.angular.io/components/paginator/overview](https://material.angular.io/components/paginator/overview).

### Column Display

By default, all columns defined will be displayed, and be displayed in the same order. If you want to only display some columns,
or change the order of the columns, set the 'displayedColumns' properties. This is an array of strings of column names.

    <hb-mat-table [tableData]="yourData"
                  [displayedColumns]="yourColumns">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

In the TypeScript:

    yourColumns: string[] = ['lastName', 'firstName', 'birthDate'];

This example will not render the 'age' column, and will display the 'lastName' column before the 'firstName' column.

### Filtering

Data filtering isn't built-in, but you can use the same template as given by the Material docs. Like other functionality, this
assumes you are using a MatTableDataSource (or other compatible DataSource).

In this example we are simply putting a text box above the table. A user can type into the text box to filter all columns.

    <mat-form-field>
        <mat-label>Filter Data</mat-label>
        <input matInput type="text" [(ngModel)]="filterText" />
    </mat-form-field>
    <hb-mat-table [tableData]="yourData">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

In the TypeScript, hook up the filter text to the data source:

    private _filterText: string = '';
    get filterText(): string {
        return this._filterText;
    }
    set filterText(value: string) {
        this._filterText = value;
        this.yourData.filter = value;
    }

### Sorting

Sorting is enabled by default. To disable sorting on all columns, set the 'canSort' property to false.

    <hb-mat-table [tableData]="yourData"
                  [canSort]="false">
        ...
    </hb-mat-table>

## API

The following defines the objects available.

### HbMatTable

The primary element when defining a table.

#### Input Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| displayedColumns | string[] | Which columns should be rendered. These should correspond to the names in the hb-mat-table-column tags. When not defined, will render all columns. |
| tableData | any | The data used to populate the table. |
| canSort | boolean | Table-level flag to enable/disable sorting. Both this property and the column's canSort must be true to enable sorting on a column. Default is true. |
| showFooter | boolean | Indicates if the footer row will be rendered. Default is false. |
| isHeaderSticky | boolean | Indicates if the header row is sticky. Default is false. |
| selectionMode | HbMatTableSelectionMode | The table's selection mode: none, single or multiple. Default is 'none'. |
| selectionColor | HbMatTableSelectionColor | The color of the row selection checkbox. When not set will simply use the default material checkbox color set by the application. |
| rowKey | string[] | The data's property names; when undefined, uses the entire row value as the key. |

#### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| table | MatTable | The MatTable instance associated with this table. Available starting in the AfterViewInit lifecycle method. |
| sort | MatSort | The MatSort instance associated with this table. This will only be set if canSort is true. Available starting in the AfterViewInit lifecycle method. |
| selection | SelectionModel | The selection model used with row selection. Use to get or set the currently selected row(s). See [https://material.angular.io/cdk/collections/overview#selectionmodel](https://material.angular.io/cdk/collections/overview#selectionmodel). |

#### Types

| Name | Description | Values |
| --- | --- | --- |
| HbMatTableSelectionMode | Defines the selection mode of the table. | 'none' &#124; 'single' &#124; 'multiple' |
| HbMatTableSelectionColor | Defines the theme of the selection checkbox. | 'primary' &#124; 'accent' &#124; 'warn' |

### HbMatTableColumn

Defines a single column.

#### Input Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| name | string | The name of the column. By default, the table data property with the same name will be displayed. |
| dataType | HbMatTableColumnDataType | The general type of data contained by the column. Default is 'string'. |
| dataFormat | string | The custom format to display the data. For 'number' data types, this is the 'digitsInfo' parameter passed to the DecimalPipe. For 'date' data types, this is the 'format' parameter for the DatePipe. |
| canSort | boolean | Indicates if this column can be sorted. The table-level canSort property must also be true. Default is true. |
| caption | string | A custom caption for the column. Otherwise will create the caption from the name property. |
| isStickyStart | boolean | Indicates if this column should be sticky and located at the start of the columns. Default is false. |
| isStickyEnd | boolean | Indicates if this column should be sticky and located at the end of the columns. |

#### Types

| Name | Description | Values |
| --- | --- | --- |
| HbMatTableColumnDataType | The data type of column. | 'string' &#124; 'number' &#124; 'date' |

