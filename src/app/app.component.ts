import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-site';
  loadingText = this.title + ' loading';

  ngOnInit() {
    console.log('The site isn\'t actually loading, it\'s still under construction... shh')
  }
}
