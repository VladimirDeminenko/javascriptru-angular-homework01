import { JavascriptruAngularHw01Page } from './app.po';

describe('javascriptru-angular-hw01 App', () => {
  let page: JavascriptruAngularHw01Page;

  beforeEach(() => {
    page = new JavascriptruAngularHw01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
