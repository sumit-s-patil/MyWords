import { Component, Inject } from '@angular/core';
import { WordModel } from '../Models/word-model';
import { WordsService } from '../Services/words-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public baseUrl: string;
  public word: string = "";
  public wordModel:WordModel = <WordModel>{};
  public loading: boolean = true;
  public message: string = "";
  public errorMessage: string = "";
  constructor(@Inject('BASE_URL') baseUrln: string,
              private wordsSerive: WordsService) {
                this.baseUrl = baseUrln;
  }

  ngOnInit() {
    this.loading = true;
    this.getWords();
  }

  AddWord() {
    this.loading = true;
    this.wordsSerive.Add(this.baseUrl, this.word).subscribe((wordAdded) => {
      if (wordAdded) {
        this.message = "Word added successfully...!";
        this.getWords();
      }
      else
        this.errorMessage = "Word cannot be empty...!";
      this.word = "";
      this.loading = false;
    });
  }

  Delete(word: string) {
    this.loading = true;
    this.wordsSerive.Delete(this.baseUrl, word).subscribe((wordDeleted) => {
      if (wordDeleted) {
        this.message = "Word deleted successfully...!";
        this.getWords();
      }
      else
      this.errorMessage = "Not deleted...!";

      this.loading = false;
    });
  }

  Update(event) {
    this.loading = true;
    var word = event.submitter.id;
    var inputValue = (<HTMLInputElement>document.getElementById("input-"+event.submitter.id)).value;

    if(word !== inputValue) {
      this.wordsSerive.Update(this.baseUrl, word, inputValue).subscribe(isUpdated => {
        if(isUpdated) {
          this.message = "Word updated successfully...!";
          this.getWords();       
        }
        else
          this.errorMessage = "Word cannot be empty...!";
      })
    }
    else
      this.errorMessage = "Change word to update...!";

    this.loading = false;
  }

  getWords() {
    this.wordsSerive.Get(this.baseUrl).subscribe(words => {
      this.wordModel = words;
      this.loading = false;
    });
  }
}
