import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MarvelService} from '../../service/marvel.service';

@Component({
  selector: 'app-marvel-character',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css'],
})
export class MarvelCharacterComponent implements OnInit {

  characters: Observable<any>;

  constructor(private marvelService: MarvelService, private router: Router) {}

  ngOnInit() {
    this.characters = this.marvelService.getAllCharacter();
  }

  showComics(id: number) {
    this.router.navigate(['/comics/', id]);
  }

  showEvents(id: number) {
    this.router.navigate(['/events/', id]);

  }

  showSeries(id: number) {
    this.router.navigate(['/series/', id]);

  }

  showStories(id: number) {
    this.router.navigate(['/stories/', id]);
  }

}
