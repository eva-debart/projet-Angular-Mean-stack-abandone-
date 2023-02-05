import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  

})
export class HomeComponent implements OnInit{
 //monsterList: Monster[] = MONSTER;
  //monsterSelected:Monster|undefined;
  count = 1;
  amis :number[];
  

  

  ngOnInit(): void {
    //console.table(this.monsterList);
    this.amis = new Array<number>();
  }

  friend(monsterId: number) {
    //const monster: Monster|undefined = this.monsterList.find(monster =>monster.id == +monsterId);
    this.count++;
    
    /*if(monster){
      this.amis = monster.Amis;
      console.log(`vous avez demander le monstre ${monster.name ,this.count}`);
      monster.votreAmis = true;
      this.monsterSelected = monster;
       

      if(this.count % 2 == 0){
        monster.votreAmis = true;
        console.log(monster.votreAmis)
        this.amis.push(monsterId);
        
      }else{
       // monster.votreAmis = false;
        //console.log(monster.votreAmis)
        //amis = amis.filter(amis = monsterId);
       
      }
      console.log(this.amis)
    } else{
      console.log(`vous avez demander un monstre qui n'existe pas.`);
      this.monsterSelected = monster;
    }*/
  }
}