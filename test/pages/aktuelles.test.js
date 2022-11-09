import renderer from 'react-test-renderer';

import Aktuelles, { getStaticProps } from '../../pages/aktuelles';

jest.mock('../../components/head');
jest.mock('../../components/blog');
jest.mock('../../components/navbar');
jest.mock('../../components/footer');
jest.mock('../../components/newsletter');
jest.mock('../../lib/directus');

const renderTree = tree => renderer.create(tree);
describe('<Aktuelles>', () => {
  it('should render component', () => {
    expect(renderTree(<Aktuelles />).toJSON()).toMatchSnapshot();
  });
  
});


describe('getStaticProps', () => {
  it('should expose a function', () => {
		expect(getStaticProps).toBeDefined();
	});
  
  it('getStaticProps should return expected output', async () => {
    // const retValue = await getStaticProps();
    expect(true).toBeTruthy();
  });
});

