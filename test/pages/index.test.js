import renderer from 'react-test-renderer';
import Index, { getStaticProps } from '../../pages/index';

jest.mock('next/link');
jest.mock('../../components/head');
jest.mock('../../components/newsletter');
jest.mock('../../components/side-by-side');
jest.mock('../../components/navbar');
jest.mock('../../components/blog');
jest.mock('../../components/hero');
jest.mock('../../components/footer');
jest.mock('../../lib/directus');

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index />).toJSON()).toMatchSnapshot();
  });
  
});


describe('getStaticProps', () => {
  it('should expose a function', () => {
		expect(getStaticProps).toBeDefined();
	});
  
  it('getStaticProps should return expected output', async () => {
    const retValue = await getStaticProps();
    expect(retValue).toBeTruthy();
  });
});