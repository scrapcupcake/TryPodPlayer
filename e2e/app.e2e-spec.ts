import { TrypodPlayerPage } from './app.po';

describe('trypod-player App', () => {
  let page: TrypodPlayerPage;

  beforeEach(() => {
    page = new TrypodPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
