import { D3Angular2Page } from './app.po';

describe('d3-angular2 App', () => {
  let page: D3Angular2Page;

  beforeEach(() => {
    page = new D3Angular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
