# NgxSimpleMaterialTable

Provides a simpler and more intuitive way of using the Angular Material table component. A basic usage would look like this:

    <hb-mat-table [tableData]="yourData">
        <hb-mat-table-column name="firstName"></hb-mat-table-column>
        <hb-mat-table-column name="lastName"></hb-mat-table-column>
        <hb-mat-table-column name="age" dataType="number"></hb-mat-table-column>
        <hb-mat-table-column name="birthDate" dataType="date"></hb-mat-table-column>
    </hb-mat-table>

Supports sorting, pagination and row selection based on the material library implementations, as well as partial support
for fixed row/column and footer row.

Behind the scenes this wraps the mat-table component, so any custom styling in your application for mat-tables will continue
to work with this.

See the repository [home page](https://github.com/holographic-blockchain/ngx-simple-material-table) for more documentation.
