import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component'
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { User1SearchComponent } from './app.user1Search';
import { adminSearchComponent } from './app.adminSearch';
import { merchantSearchComponent } from './app.merchantSearch';
;
const routes:Routes=[
    
    
    
    
    
    
    

];
@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
        
    ],

    declarations: [
        AppComponent,User1SearchComponent,adminSearchComponent,merchantSearchComponent],
        
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }
