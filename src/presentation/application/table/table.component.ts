import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from 'logic/Store';
import axios from 'axios';

@Component({
    selector: 'jp-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
    private data = [];
    private title;
    private columns = [
        {
            name: 'index',
            header: 'Index'
        }, {
            name: 'customerid',
            header: 'Customer Id'
        }, {
            name: 'ModifiedTime',
            header: 'Modified Time'
        }, {
            name: 'notes',
            header: 'Notes'
        }
    ];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}


    async ngOnInit() {
        this.activatedRoute.params
        .map(param => param.id)
        .subscribe(async pathId => {
            try {
                const category = pathId.split('-')[0];
                const file = pathId.split('-')[1];
                axios
                .get(`http://localhost:8101/data/${category}/${file}`)
                .then((response) => {
                    const data = response.data;
                    data.forEach((item, index) => {
                        item.index = index + 1;
                    });
                    Store.setName(file);
                    Store.setData(data);
                    this.data = Store.data;
                    this.title = Store.fileName;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            catch (e) {
                throw e;
            }
        });

        // this.data = Store.data;
        // this.title = Store.fileName;
    }
}