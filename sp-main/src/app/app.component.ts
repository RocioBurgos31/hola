import { Component } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

 interface Rocket {
  name: string;
  description: string;
  flickr_images:string;
  engine: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-5b';
  data : Rocket[]= [];


  constructor(private http: HttpClient)
  {}
  ngOnInit() {
    this.http.get<Rocket[]>("https://api.spacexdata.com/v4/rockets").subscribe(data => {
      this.data = data;
    });
  }

}
