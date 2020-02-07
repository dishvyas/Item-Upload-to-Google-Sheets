import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicGrid } from '../grid.model';
import { ItemRequest} from './itemrequest';
import { GoogleAuthService } from '../services/UserService/GoogleAuth/google-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatashareService } from '../services/datashare/datashare.service';


declare var fingerprint;

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {


  constructor(private toastr: ToastrService,
              public gauth: GoogleAuthService,
              private http: HttpClient,
              private service: DatashareService) { }

  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit(): void {
      this.newDynamic = {itemname: '', quantity: '', price: '', phonenumber: '', measuringu: ''};
      this.dynamicArray.push(this.newDynamic);
  }

  addRow(index) {
      this.newDynamic = {itemname: '', quantity: '', price: '', phonenumber: '', measuringu: ''};
      console.log(this.newDynamic);
      this.dynamicArray.push(this.newDynamic);
      return true;
  }

  onSubmit() {
    this.service.pRequest(this.dynamicArray);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  deleteRow(index) {
      if (this.dynamicArray.length === 1) {
        this.toastr.error('Cant delete the row when there is only one row', 'Warning');
        return false;
      } else {
          this.dynamicArray.splice(index, 1);
          return true;
      }
  }

}
