import { TarunguptainPage } from './app.po';

describe('tarunguptain App', function() {
  let page: TarunguptainPage;

  beforeEach(() => {
    page = new TarunguptainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
