import { Component, OnInit, Input} from '@angular/core';
import { Monster } from '../Monster/monster';
import { MonsterService } from '../Monster/monster.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-changer-role',
  templateUrl: './form-changer-role.component.html',
  styles: [
  ]
})
export class FormChangerRoleComponent implements OnInit{
  @Input() monster: Monster;
  roles: string[];
  constructor(
    private MonsterServices: MonsterService,
    private router: Router){} 

  ngOnInit(){
    //listeRoles
    this.roles = this.MonsterServices.getMonsterRoleList();
  }

  hasType(role: string):boolean {
    return this.monster.role.includes(role);
  }

  selectRole($event : Event, role:string){
    const isChecked:boolean =($event.target as HTMLInputElement).checked;
    
    if(isChecked){
      this.monster.role.push(role);
    } else{
      const index = this.monster.role.indexOf(role)
      this.monster.role.splice(index, 1);
    }
  }

  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(['/home', this.monster.id]);

  }
}
