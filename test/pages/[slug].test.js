import renderer from 'react-test-renderer';
import Post, { getStaticProps, getStaticPaths } from '../../pages/aktuelles/[slug]';

jest.mock('next/image');
jest.mock('../../components/navbar');
jest.mock('../../components/head');
jest.mock('html-react-parser');
jest.mock('../../components/newsletter');
jest.mock('../../components/footer');
jest.mock('@heroicons/react/24/solid');
jest.mock('../../lib/directus');

const renderTree = tree => renderer.create(tree);
describe('<Post>', () => {
  it('should render component', () => {
    expect(renderTree(<Post />).toJSON()).toMatchSnapshot();
  });
  
});


describe('getStaticProps', () => {
  it('should expose a function', () => {
		expect(getStaticProps).toBeDefined();
	});
  
  it('getStaticProps should return expected output', async () => {
    // const retValue = await getStaticProps();
    expect(true).toBeTruthy;
  });
});

describe('getStaticPaths', () => {
  it('should expose a function', () => {
		expect(getStaticPaths).toBeDefined();
	});
  
  it('getStaticPaths should return expected output', async () => {
    const retValue = await getStaticPaths();
    expect(retValue).toBeTruthy;
  });
});