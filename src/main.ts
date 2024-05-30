import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { JokesComponent } from './app/jokes/jokes.component';
import { CategoriesComponent } from './app/categories/categories.component';


bootstrapApplication(AppComponent, { 
  providers: [provideHttpClient(),
  provideRouter([
  {path:'jokes', component:JokesComponent},
  { path: 'Categories', component: CategoriesComponent },
])]
})
  .catch((err) => console.error(err));
