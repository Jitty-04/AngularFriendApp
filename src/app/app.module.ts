import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { RouterModule, Routes } from '@angular/router';

const myRouter:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewFriendComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendComponent,
    NavigationComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
