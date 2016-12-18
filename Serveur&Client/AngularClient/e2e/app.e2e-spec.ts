import { TPAngularPage } from './app.po';

describe('tpangular App', function() {
  let page: TPAngularPage;

  beforeEach(() => {
    page = new TPAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
