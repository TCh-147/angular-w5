import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private APIService: APIService, private router: Router) { }

  public Categories:{}[]= [];

  public GenerateCategories(){
      this.APIService.GetCategories().subscribe((data:any) => {
        this.Categories.push(data);
      });
      console.log("Something",this.Categories);
  }

  public ngOnInit(){
    this.GenerateCategories();
  }
}
