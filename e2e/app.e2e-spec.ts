import { PrizeOTronPage } from './app.po';

describe('prize-o-tron App', () => {
  let page: PrizeOTronPage;

  beforeEach(() => {
    page = new PrizeOTronPage();
  });

  it('should display "The Amazing Prize-O-Tron" as the toolbar title', () => {
    page.navigateTo();
    expect<any>(page.getToolbarTitle()).toEqual('The Amazing Prize-O-Tron');
  });
});
