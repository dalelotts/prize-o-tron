import { browser, element, by } from 'protractor';

export class PrizeOTronPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root span')).getText();
  }
}
