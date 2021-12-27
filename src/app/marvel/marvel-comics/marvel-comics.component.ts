import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-marvel-comics',
  templateUrl: './marvel-comics.component.html',
  styleUrls: ['./marvel-comics.component.css']
})
export class MarvelComicsComponent implements OnInit {

  characters

  constructor(
    private route: ActivatedRoute,
    private MarvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.characters = this.MarvelService.getComicsByCharacterId(id)
    })
    this.characters.subscribe(res => console.log(res));
  }

}
