import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Validation from '../utils/validation';



@Component({
  selector: 'app-form-incription',
  templateUrl: './form-incription.component.html',
})
export class FormIncriptionComponent implements OnInit {
  roles: string[];

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    role: new FormControl(''),
    
  });
  submitted=false;
 
  
  constructor(private formBuilder : FormBuilder){}

 metier:string[];

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });
    this.metier = new Array<string>();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  /*hasType(role: string):boolean {
    return this.monster.role.includes(role);
  }*/
  getRoleValue(e:any, role:string){
    if(e.target.checked)
    {
      console.log(role + ' checked');
      this.metier.push(role);
    }else
    {
      console.log( role + ' Unchecked')
      this.metier = this.metier.filter(m=>m!=role);
    }
    console.log(this.metier)
  }
  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.invalid){
      return;
    } 
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
