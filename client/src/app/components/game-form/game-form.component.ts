import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //ActivatedRoute traela los

import { Game } from '../../models/Game';
import { SergamesService } from '../../services/sergames.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  game: any = {
    id:0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };

  edit: boolean = false;

  constructor(private sergames: SergamesService, private router: Router, private activated: ActivatedRoute) { }

  ngOnInit() {
    const actParams = this.activated.snapshot.params;
    if(actParams.id) {
      this.sergames.getGame(actParams.id).subscribe(res =>{
        console.log(res)
        this.game = res;
        this.edit = true;
      },
      err=> console.error(err)
      );
    }
  }

  savedGame() {
    //console.log(this.game);
    delete this.game.create_at;
    delete this.game.id;

    this.sergames.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

  updatedGame(){
    delete this.game.create_at;
    console.log(this.game);
    this.sergames.updateGame(this.game.id, this.game).subscribe(res => {
      console.log(res);
      this.router.navigate(['/games']);
    },
    err => console.error(err)    
    );
  }

}
