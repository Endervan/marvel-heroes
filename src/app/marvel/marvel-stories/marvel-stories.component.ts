import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-marvel-stories',
  templateUrl: './marvel-stories.component.html',
  styleUrls: ['./marvel-stories.component.css']
})
export class MarvelStoriesComponent implements OnInit {

  characters

  constructor(
    private route: ActivatedRoute,
    private MarvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.characters = this.MarvelService.getStoriesByCharacterId(id)
    })
    this.characters.subscribe(res => console.log(res));
  }
}
