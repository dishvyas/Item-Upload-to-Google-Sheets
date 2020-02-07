import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PostserviceService } from './services/postservice/postservice.service';
import { GoogleAuthService } from './services/UserService/GoogleAuth/google-auth.service';
import { JsLoaderService } from './services/js-loader/js-loader.service';
import { UserCred } from './Config/config';


@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [JsLoaderService,
    GoogleAuthService,
  PostserviceService,
UserCred],
  bootstrap: [AppComponent]
})
export class AppModule { }
