import classNames from 'classnames';

import Select from '~/components/Select';
import { demos } from './demos/index';
import Demo from './types';

type Props = {
  loadedDemo: Demo;
  handleDemoChange: (demo: Demo) => () => void;
  demoOptions: { label: string, value: string }[];
  setDemoByTitle: (value: string) => void;
};

const DemoFilters = ({
  loadedDemo,
  handleDemoChange,
  demoOptions,
  setDemoByTitle,
}: Props) => (
  <>
    <ul className="filter-list">
      {demos.map((demo) => (
        <li key={demo.title} className="filter-item">
          <button
            className={classNames({ active: loadedDemo.title === demo.title })}
            onClick={handleDemoChange(demo)}
          >
            {demo.title}
          </button>
        </li>
      ))}
    </ul>
    <div className="filter-select-box">
      <Select
        label="Select category"
        value={loadedDemo.title}
        handleChange={setDemoByTitle as (value: unknown) => void}
        options={demoOptions}
      />
    </div>
  </>
);

export default DemoFilters;
