import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitted = false;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('submitButton') submitButton!: ElementRef;
 

  async sendMail(){
   // action="https://@vrebo.de/send_mail/send_mail.php"
   console.log('sending mail', this.myForm);
   let nameField = this.nameField.nativeElement;
   let emailField = this.emailField.nativeElement;
   let messageField = this.messageField.nativeElement;
   let submitButton = this.submitButton.nativeElement;
   nameField.disabled = true;
   emailField.disabled = true;
   messageField.disabled = true;
   submitButton.disabled = true;
   
 // Animation anzeigen 
   let fd = new FormData();
   fd.append('name', nameField.value);
   fd.append('email', emailField.value);
   fd.append('message', messageField.value);
     // senden des Formulars
    await fetch('https://vrebo.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    }
    );
     // Text anzeigen Nachricht wurde versendet
     nameField.disabled = false;
     emailField.disabled = false;
     messageField.disabled = false;
     submitButton.disabled = false;

     nameField.value = '';
      emailField.value = '';
      messageField.value = '';

     this.isSubmitted = true;
     
     setTimeout(() => {
      this.isSubmitted = false;
  }, 3000); // 3000 Millisekunden = 3 Sekunden
  }
}
