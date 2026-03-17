import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @ViewChild('contactForm') form!: NgForm;

  contactModel = new Contact('', '', '');
  submitted = false;
  loading = false;

  onClickSubmit() {
    this.loading = true;
    this.sendEmail();
  }

  public sendEmail() {
    const template_params = {
      from_name: this.contactModel.name,
      from_email: this.contactModel.email,
      message: this.contactModel.message,
    };
    emailjs
      .send(
        environment.emailjsServiceId,
        environment.emailjsTemplateId,
        template_params,
        environment.emailjsPublicKey,
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.submitted = true;
          this.form.reset();
          this.loading = false;
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  }
}
