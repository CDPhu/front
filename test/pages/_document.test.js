import Document from 'next/document'
import MyDocument from '../../pages/_document';

jest.mock('next/document');

describe('MyDocument', () => {
  let instance;

  beforeEach(() => {
    instance = new MyDocument();
  });

  it('instance should be an instanceof MyDocument', () => {
    expect(instance instanceof MyDocument).toBeTruthy();
  });

  it('should have a static method getInitialProps()', async () => {
    await MyDocument.getInitialProps(Document);
    expect(false);
  });

  it('should have a method render()', () => {
    instance.render();
    expect(false);
  });
});