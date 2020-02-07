import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemRequest} from '../../grid-view/itemrequest';
import { DynamicGrid } from '../../grid.model';
import { Body } from '../../schemas/payload';
import { Payload } from '../../schemas/payload';
import { PostserviceService } from '../postservice/postservice.service';
import { Token } from '../../schemas/token';
import { UserCred} from '../../Config/config';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor(private http: HttpClient,
              private myservice: PostserviceService) {
                this.clientid = UserCred.clientid;
              }

  private accessToken = '';
  // tslint:disable-next-line:max-line-length
  private sheetid = UserCred.sheetid;
  private refreshToken = UserCred.refreshtoken;
  private clientsecret = UserCred.clientsecret;
  private clientid: string;
  public model = new ItemRequest();
  private readonly granttype: string = 'refresh_token';

  pRequest(dynamicArray: Array<DynamicGrid>): void {

    const headerJson = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const headers = new HttpHeaders(headerJson);
    const postData: Body = {
      client_id: this.clientid,
      client_secret: this.clientsecret,
      refresh_token: this.refreshToken,
      grant_type: this.granttype
    };
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    this.http.post<Token>('https://accounts.google.com/o/oauth2/token?client_id=670967526095-jm515iknpv7l4ccdm68gc719b8gk09hi.apps.googleusercontent.com&client_secret=J9F4gb_KMx2TPJhCa4ZVO-2P&refresh_token=1//0473rxYIDG8thCgYIARAAGAQSNwF-L9IrQn2GN6o7a5PdA2YZ6N-0_os6OIIgmK8-p7hxA0E3MIknY1DeMBFdwe81D4SD3C8Betg&grant_type=refresh_token', {headers})
        .subscribe( data => {
        console.log(data);
        this.accessToken = data.access_token;
        this.myservice.postRequest(dynamicArray , this.accessToken);
        }, error => {
        console.log(error);
        });


  }
}
