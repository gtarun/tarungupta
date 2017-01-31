import { tarunguptaPage } from './app.po';

describe('tarungupta App', function() {
  let page: tarunguptaPage;

  beforeEach(() => {
    page = new tarunguptaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
