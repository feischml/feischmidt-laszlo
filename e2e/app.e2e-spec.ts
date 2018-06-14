import { LaszloFeischmidtSpaPage } from './app.po';

describe('laszlo-feischmidt-spa App', () => {
  let page: LaszloFeischmidtSpaPage;

  beforeEach(() => {
    page = new LaszloFeischmidtSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
