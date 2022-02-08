import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pondacamsApp';
  showFiller = false;
  showCategory = false;
  showType = false;
  showWillingness = false;
  showLanguage = false;
  showAge = false;
  showEthnicity = false;
  showAppearance = false;
  showBreast = false;
  showHair = false;
  showRegion = false;

  /**
   * openSidebar
   */
  public openSidebar() {
    
  }
}
