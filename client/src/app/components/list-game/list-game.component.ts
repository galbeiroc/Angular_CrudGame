import { Component, OnInit, HostBinding } from '@angular/core';

import { Game } from '../../models/Game';
import { SergamesService } from '../../services/sergames.service';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css']
})
export class ListGameComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  games: any = [];

  constructor(private servGame: SergamesService) { }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this.servGame.getGames().subscribe(
      res=> {
        this.games = res;
      },
      err => console.log(err)
    )
  }

  deleteGame(id: string){
    this.servGame.deleteGame(id).subscribe(res =>{
       console.log(res);
       this.getGame();
    },
    err=> console.error(err)
    );    
  }

  

  // editGame(id: string){
  //   console.log(id)
  // }

}
