import { Component, inject } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit{
constructor(private APIService: APIService, private router: Router) { }

  public Jokes:{
    categories:[],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
  }[]=[];


  public resetJokes(){
    this.Jokes = [];
  }

  public GenerateJokes(){
    this.resetJokes();
      this.APIService.GetRandomJoke().subscribe((data:any) => {
        this.Jokes.push(data);
      });
  }


  public ngOnInit(){
    this.GenerateJokes();
  }
}
