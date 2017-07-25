import { PokeapiPage } from './app.po';

describe('pokeapi App', () => {
  let page: PokeapiPage;

  beforeEach(() => {
    page = new PokeapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
