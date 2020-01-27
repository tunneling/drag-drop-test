
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { ToolbarTopComponent } from './components/toolbar-top/toolbar-top.component';
import { ToolbarBottomComponent } from './components/toolbar-bottom/toolbar-bottom.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ToolbarTopComponent, ToolbarBottomComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // ToolbarTopComponent,
    // ToolbarBottomComponent,
    // HomeComponent
  ]
})
export class CoreModule { }
