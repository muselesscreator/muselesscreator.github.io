import {
  vi,
  describe,
  test,
  expect,
} from 'vitest';

import { shallow } from '@muselesscreator/react-shallow-snapshot';

import About from './index';
import pageData, { StringField, ListField } from './pageData';

vi.mock('./pageData', () => ({
  ...vi.importActual('./pageData'),
  default: {
    title: 'Test Title',
    fields: [],
  },
}));

pageData.fields = [
  { type: 'text', text: 'test text 1' },
  { type: 'text', text: 'test text 2' },
  { type: 'text', text: 'test text 3' },
  { type: 'list', items: ['test item 1', 'test item 2', 'test item 3'] },
];
const { fields } = pageData;

describe('About page', () => {
  test('snapshot', () => {
    const el = shallow(<About />);
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
