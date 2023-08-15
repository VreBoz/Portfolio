import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('submitButton') submitButton!: ElementRef;
  @ViewChild('submitAnimation') submitAnimation!: ElementRef;

  constructor(private renderer: Renderer2) {} // Renderer2 injizieren

  async sendMail(){
   console.log('sending mail', this.myForm);
   let nameField = this.nameField.nativeElement;
   let emailField = this.emailField.nativeElement;
   let messageField = this.messageField.nativeElement;
   let submitButton = this.submitButton.nativeElement;
   nameField.disabled = true;
   emailField.disabled = true;
   messageField.disabled = true;
   submitButton.disabled = true;
   
   let fd = new FormData();
   fd.append('name', nameField.value);
   fd.append('email', emailField.value);
   fd.append('message', messageField.value);
   
    await fetch('https://vrebo.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });
    
     nameField.disabled = false;
     emailField.disabled = false;
     messageField.disabled = false;
     submitButton.disabled = false;

     nameField.value = '';
     emailField.value = '';
     messageField.value = '';

     this.renderer.removeClass(this.submitAnimation.nativeElement, 'd-none');
      this.renderer.addClass(this.submitAnimation.nativeElement, 'slideRotateAnimation');
        
      setTimeout(() => {
          this.renderer.removeClass(this.submitAnimation.nativeElement, 'slideRotateAnimation');
          this.renderer.addClass(this.submitAnimation.nativeElement, 'd-none');
          
      }, 7000); // Wartezeit von 5 Sekunden, um sicherzustellen, dass die Animation abgeschlossen ist
    }
}