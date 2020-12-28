import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { QuestEditComponent } from "./edit-modules/quest-edit.component";
import { QuestViewComponent } from "./view-modules/quest-view.component";
import { InsertPictureComponent } from "./edit-modules/insert-picture/insert-picture.component";


const appRoutes: Routes = [
  {path: "", component: QuestViewComponent},
  {path: "edit", component: QuestEditComponent, children: [
      {path: "insert-picture", component: InsertPictureComponent}
    ]},
];

@NgModule({
  declarations: [
       QuestEditComponent,
       QuestViewComponent,
       InsertPictureComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [QuestViewComponent]
})
export class PictureQuestModule { }
