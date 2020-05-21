import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmCodeService } from '../confirm-code.service';
import { VerificationService } from '../verification/verification.service';
import { Verify } from '../verification/Verify';

@Component({
  selector: 'app-confirm-phone-number',
  templateUrl: './confirm-phone-number.component.html',
  styleUrls: ['./confirm-phone-number.component.css']
})
export class ConfirmPhoneNumberComponent implements OnInit {

  myForm: FormGroup;
  errorMessage: string;

  constructor(private route:ActivatedRoute,private fb:FormBuilder, private router: Router, private confirmCodeService: VerificationService) {
    this.controleValidation();
   }

  ngOnInit() {
  }

  controleValidation(){
    this.myForm = this.fb.group({

      code: ["", [Validators.required, Validators.pattern(/^[2,9,7]+[0-9]{7}/)]]


    })
  }



  onSubmit(){

    const code = this.myForm.get("telephone").value;



    console.log('code',code );




  }


  sendCode(code: Verify){
    this.confirmCodeService.sendPhoneCheckCode(code).subscribe((response) =>{
      let valider = response as boolean;
      console.log(valider);
    });
  }

}
