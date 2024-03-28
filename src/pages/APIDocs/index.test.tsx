import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';

import APIDocs from './index';
import pageData from './pageData';

vi.mock('./pageData', () => ({
  ...vi.importActual('./pageData'),
  default: {
    title: 'Test Title',
    fields: [],
  },
}));

describe.skip('API Docs page', () => {
  test('snapshot', () => {
    const el = shallow(<APIDocs />);
    expect(el.snapshot).toMatchSnapshot();
    const listItems = (fields[3] as ListField).items;
    expect(el.instance.matches(shallow(
      <article className="about-text">
        <p>{(fields[0] as StringField).text}</p>
        <p>{(fields[1] as StringField).text}</p>
        <p>{(fields[2] as StringField).text}</p>
        <ul>
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </article>
    )));

  });
});
