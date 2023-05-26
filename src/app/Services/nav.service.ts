import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  private backgroundElements: HTMLElement[] = [];

  private getBackgroundElement(routeUrl: string){
    this.backgroundElements = [];
    if (routeUrl === '/') 
    {
      this.backgroundElements[0] = (document.querySelector('.home-container') as HTMLElement);
    } 
    else if (routeUrl.startsWith('/Women'))
    {
      this.backgroundElements[0] = (document.querySelector('.content') as HTMLElement);
      this.backgroundElements[1] = (document.querySelector('.container') as HTMLElement);
    }
  }

  blurBackground(routeUrl: string){
    this.getBackgroundElement(routeUrl);
    
    this.backgroundElements.forEach(element => {
      element.style.filter = 'blur(.5rem)';
    });
  }

  removeBlur(routeUrl: string){
    this.getBackgroundElement(routeUrl);
    
    this.backgroundElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  }
}
