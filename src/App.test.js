import App from './App';
import { shallow } from '@muselesscreator/react-shallow-snapshot';

test('renders learn react link', () => {
  expect(shallow(<App />).snapshot).toMatchSnapshot();
});
