import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateWordInput } from '../Models/update-word-input';
import { WordInput } from '../Models/word-input';
import { WordModel } from '../Models/word-model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private httpClient: HttpClient) { }

  Get(baseUrl: string): Observable<WordModel> {
    var words = this.httpClient.get<WordModel>(baseUrl + 'api/Words/GetWords');
    return words;
  }

  Add(baseUrl: string, word: string): Observable<boolean> {
    var wordInput: WordInput = <WordInput>{};
    wordInput.word = word;
    let headerParams = new HttpHeaders();
    return this.httpClient.post<boolean>(baseUrl + 'api/Words/AddWord', wordInput, { headers: headerParams });
  }

  Delete(baseUrl: string, word: string): Observable<boolean> {
    var wordInput: WordInput = <WordInput>{};
    wordInput.word = word;
    let headerParams = new HttpHeaders();
    return this.httpClient.post<boolean>(baseUrl + 'api/Words/DeleteWord', wordInput, { headers: headerParams });
  }

  Update(baseUrl: string, word: string, input: string): Observable<boolean> {
    var wordInput: UpdateWordInput = <UpdateWordInput>{};
    wordInput.word = word;
    wordInput.input = input;
    let headerParams = new HttpHeaders();
    return this.httpClient.post<boolean>(baseUrl + 'api/Words/UpdateWord', wordInput, { headers: headerParams });
  }
 
}
