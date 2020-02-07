import { Component, OnInit, NgZone } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { GoogleSpreadsheetsApiService } from '../services/UserService/GoogleAuth/googleapi.service';
import { Note } from './note';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppConfig } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @BlockUI()
  blockUI: NgBlockUI;

  spreadsheetId: string;

  range: 'A:C';

  isShowAddForm: boolean;

  notes: Note[] = [];

  photo: 'assets/images/J.png';

  constructor(
    private googleSpreadsheetsApi: GoogleSpreadsheetsApiService,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit() {
    // this.init();
  }


  list(): void {
    if (this.spreadsheetId) {
      this.googleSpreadsheetsApi.get(this.spreadsheetId, this.range).then(response => {
        this.notes = [];
        if (response.result.values) {
          response.result.values.forEach(element => {
            const note = new Note();
            note.id = this.notes.length + 1;
            note.itemname =  element[0];
            note.price = element[1];
            note.quantity = element[2];
            this.notes.push(note);
          });
        }
        this.ngZone.run(() => {});
        this.blockUI.stop();
      }, () => {
        // this.generator();
      });
    }
  }

  remove(note: Note): void {
    // this.blockUI.start('Processing...');
    this.googleSpreadsheetsApi.clear(this.spreadsheetId, 'A' + note.id + ':C').then(response => {
      const values: Array<Array<any>> = [];
      this.notes.filter(element => {
        return element.id > note.id;
      }).forEach(element => {
        values.push(element.toArray());
      });
      // tslint:disable-next-line:no-shadowed-variable
      this.googleSpreadsheetsApi.append(this.spreadsheetId, this.range, values).then(response => {
        this.list();
      });
    });
  }

  onAdd(data: any): void {
    // this.blockUI.start('Processing...');
    console.log('new');
    this.googleSpreadsheetsApi.append(this.spreadsheetId, this.range, [[data.title, data.message, 0]]).then(response => {
      this.isShowAddForm = !this.isShowAddForm;
      this.list();
    });
  }


}
