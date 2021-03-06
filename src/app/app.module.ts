import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './newsfeed/newsfeed.service';
import { InvitationPageModule } from './invitation/invitation.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ArticlePage } from './newsfeed/article/article.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { GroupPageModule } from './group/group.module';
import { CreateModalComponent } from './group/create-modal/create-modal.component';
import { GroupModalComponent } from './group/group-modal/group-modal.component';
import { GroupMemberPageModule } from './group-member/group-member.module';
import { ShareModalComponent } from './newsfeed/share-modal/share-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticlePage,
    ShareModalComponent,
  ],
  entryComponents: [GroupModalComponent, CreateModalComponent, ShareModalComponent],
  imports: [
    FormsModule,
    BrowserModule, 
    HttpClientModule,
    GroupPageModule,
    GroupMemberPageModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    InvitationPageModule,
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    NewsService,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}