// app.module.ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ValidationInputComponent } from './validation-input/validation-input.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { ChildComponent } from './child/child.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationInputComponent,
    PasswordStrengthComponent,
    ChildComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
