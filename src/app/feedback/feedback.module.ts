import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackRoutingModule} from './feedback-routing.module';
import {FeedbackCreateComponent} from './feedback-create/feedback-create.component';
import {FeedbacksComponent} from './feedbacks.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [FeedbackCreateComponent, FeedbacksComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule

  ]
})
export class FeedbackModule { }
