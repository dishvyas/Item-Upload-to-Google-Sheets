import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemRequest} from '../../grid-view/itemrequest';
import { DynamicGrid } from '../../grid.model';
import { Payload } from 'src/app/schemas/payload';
import { AppConfig } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  [x: string]: any;

  constructor(private http: HttpClient) {
    this.sheet_id = AppConfig.sheet_id;
    console.log(this.sheet_id);
   }
  public model = new ItemRequest();


  postRequest(dynamicArray: Array<DynamicGrid>, accessToken): void {

    const headerJson = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
        };
    const headers = new HttpHeaders(headerJson);
      // tslint:disable-next-line:semicolon
      // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:one-variable-per-declaration
    const currentRow = [];
    const length = dynamicArray.length - 1;
    for (let i = 0; i < length; i++) {
        // console.log(dynamicArray[i].itemname, dynamicArray[i].quantity, dynamicArray[i].price);
        dynamicArray[i].phonenumber = dynamicArray[0].phonenumber;
        console.log(dynamicArray[i].phonenumber);
        // tslint:disable-next-line:max-line-length
        if (dynamicArray[i].itemname === '' && dynamicArray[i].quantity === '' && dynamicArray[i].price === '' && dynamicArray[i].measuringu === '' && dynamicArray[i].phonenumber === '' )  {
          i += 1;
        }
        // tslint:disable-next-line:max-line-length
        currentRow.push([dynamicArray[i].itemname, dynamicArray[i].quantity, dynamicArray[i].price, dynamicArray[i].measuringu, dynamicArray[i].phonenumber]);
        console.log(currentRow);
    }
    const postData: Payload = {
      majorDimension: 'ROWS',
      range: 'A1',
      values: currentRow
    };
    // tslint:disable-next-line:max-line-length
    this.http.post(`https://sheets.googleapis.com/v4/spreadsheets/${AppConfig.sheet_id}/values/A1:append?alt=json&key=AIzaSyBNwlkcxmVjcOC36ODsoOo2PS8W2_yVN6Q&callback=googleDocCallback&valueInputOption=USER_ENTERED`, postData, {headers})
        .subscribe(data => {
        }, error => {
          console.log(error);
        });
  }
}
