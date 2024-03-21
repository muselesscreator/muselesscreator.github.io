import {
  vi,
  describe,
  test,
  expect,
  Mock,
} from 'vitest';

import { shallow, setMockName } from '@muselesscreator/react-shallow-snapshot';

import useSidebarData from './useSidebarData';
import Sidebar from '.';

vi.mock('./useSidebarData', () => ({ default: vi.fn() }));
vi.mock('./ContactList', () => ({ default: 'ContactList' }));
vi.mock('./UserAvatar', () => ({ default: 'UserAvatar' }));
vi.mock('./UserInfo', () => ({ default: 'UserInfo' }));
vi.mock('react-icons/fa', () => ({ FaChevronDown: 'FaChevronDownIcon' }));

const hookProps = {
  isActive: true,
  toggle: vi.fn(),
};

setMockName(hookProps.toggle, 'hookProps.toggle');
(useSidebarData as Mock).mockReturnValue(hookProps);

describe('Sidebar component', () => {
  test('snapshot', () => {
    const el = shallow(<Sidebar />);
    expect(el.snapshot).toMatchSnapshot();
  });
  test('sidebar renders UserAvatar and UserInfo in sidebar-info with toggle button', () => {
    const el = shallow(<Sidebar />);
    const sidebarInfo = el.instance.findByClassName('sidebar-info')[0];
    expect(sidebarInfo.findByType('UserAvatar')).toBeTruthy();
    expect(sidebarInfo.findByType('UserInfo')).toBeTruthy();
    const button = sidebarInfo.findByType('button')[0];
    expect(button.props.onClick).toEqual(hookProps.toggle);
  });
  test('sidebar renders ContactList in info_more div', () => {
    const el = shallow(<Sidebar />);
    const infoMore = el.instance.findByClassName('sidebar-info_more')[0];
    expect(infoMore.findByType('ContactList')).toBeTruthy();
  });
});
