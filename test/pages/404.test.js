import renderer from 'react-test-renderer';
import Custom404 from '../../pages/404';

const renderTree = tree => renderer.create(tree);
describe('<Custom404>', () => {
  it('should render component', () => {
    expect(renderTree(<Custom404 />).toJSON()).toMatchSnapshot();
  });
  
});