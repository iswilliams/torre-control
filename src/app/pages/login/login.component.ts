import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BFFService } from '../../services/bff.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage:string
  constructor(private formBuilder: FormBuilder, private bffServices: BFFService, private router: Router) { }

  ngOnInit(): void {

    this.errorMessage = "";

    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  clickLogin(loginForm){
    console.log('clickLogin - loginForm: ',loginForm);
    this.bffServices.login(loginForm.usario, loginForm.password).subscribe(response =>{
        console.log('response: ',response);
        this.router.navigateByUrl('/dashboard');
        console.log('router: ',this.router);
        console.log('dos: ');
    }, (error)=>{
      console.log('clickLogin - error: ',error);
      this.errorMessage = "Tu usuario o contraseña son erroneos Olvidades tu contraseña?";
    });
  }


}
