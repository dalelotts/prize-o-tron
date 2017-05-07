import { PrizeOTronPage } from './app.po';

describe('prize-o-tron App', () => {
  let page: PrizeOTronPage;

  beforeEach(() => {
    page = new PrizeOTronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('The Amazing Prize-O-Tron');
  });
});
