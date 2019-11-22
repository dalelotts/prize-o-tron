import { browser, element, by } from 'protractor';

export class PrizeOTronPage {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarTitle() {
    return element(by.className('toolbar-title')).getText();
  }
}
