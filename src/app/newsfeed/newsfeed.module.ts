import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsfeedPage } from './newsfeed.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: NewsfeedPage, children: [
        { path: ':id', component: NewsfeedPage },
      ] },
    ])
  ],
  declarations: [NewsfeedPage]
})
export class NewsfeedPageModule {}
