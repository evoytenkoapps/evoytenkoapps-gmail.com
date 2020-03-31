import { TestAnyPage } from './app.po';

describe('test-any App', function() {
  let page: TestAnyPage;

  beforeEach(() => {
    page = new TestAnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
