
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wh-ec-application';
}


/*
import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    template: '<p>test</p>'
})
export class AppComponent { }
*/
