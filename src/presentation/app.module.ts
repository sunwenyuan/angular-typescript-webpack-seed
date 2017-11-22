import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './application/app.component';
import { IndexComponent } from './application/index/index.component';
import { TableComponent } from './application/table/table.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }, {
        path: 'index',
        component: IndexComponent
    }, {
        path: 'table/:id',
        component: TableComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        ),
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        TableComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule {
    ngDoBootstrap() { }
}