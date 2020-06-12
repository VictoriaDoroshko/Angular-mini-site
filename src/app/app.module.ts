import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { PriceComponent } from './components/price/price.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', component:CarComponent},
  {path: 'price', component:PriceComponent},
  {path: 'photo', component:PhotoComponent},
  {path: 'about', component:ContactsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    PriceComponent,
    PhotoComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
