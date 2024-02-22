import { Component } from '@angular/core';
import { BiteService } from 'src/app/services/bite.service';

@Component({
  selector: 'app-add-bite',
  templateUrl: './add-bite.component.html',
  styleUrls: ['./add-bite.component.css']
})
export class AddBiteComponent {
  formData: any = {};

  constructor(private biteService: BiteService){

  }

  onSubmit(form: any) {
    if (form.valid) {
      // Keywords is a comma seperated string, but we need to send an array. So, let's do this.
      this.formData.keywords = this.formData.keywords.split(",");
      console.log(this.formData);
      // let's send this bite data to server.
      this.biteService.addBite(this.formData).subscribe(
        data=>{
          console.log(data);
          alert("Bite created!");
        }, error=>{
          console.log(error);
          alert("Bite could not be created!");
        }
      )

    } else {
      // Form data is invalid, handle error or show validation messages
    }
  }
}
