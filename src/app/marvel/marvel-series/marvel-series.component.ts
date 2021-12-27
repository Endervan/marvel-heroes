import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-marvel-series',
  templateUrl: './marvel-series.component.html',
  styleUrls: ['./marvel-series.component.css']
})
export class MarvelSeriesComponent implements OnInit {

  characters;

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params.id, 10);
      this.characters = this.marvelService.getSeriesByCharacterId(id);
    });
    this.characters.subscribe(res => console.log(res.length));
  }

}
