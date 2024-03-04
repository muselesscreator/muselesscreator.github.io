import React from 'react';

import {
  FaChevronDown,
  FaEye,
  FaExternalLinkAlt,
} from 'react-icons/fa';


import classNames from 'classnames';
import { demos } from './demos';
import DiceSpinners from './demos/DiceSpinners';
import Select from '~/components/Select';

const Demos = () => {
  const [demoFilter, setDemoFilter] = React.useState(demos[0]);
  const handleCategoryChange = (category) => () => {
    setDemoFilter(category)
  };
  const { Element } = demoFilter;
  const demoObj = demos.reduce((acc, demo) => ({
    ...acc,
    [demo.title]: demo,
  }), {});
  const demoOptions = demos.map(demo => ({ value: demo.title, label:  demo.title }));
  return (
    <article className="demos active">
      <header>
        <h2 className="h2 article-title">Demos</h2>
      </header>
      <section className="demos-text">
        <ul className="filter-list">
          {demos.map((demo) => (
            <li key={demo.title} className="filter-item">
              <button
                className={classNames({ active: demoFilter.title ===  demo.title})}
                onClick={handleCategoryChange(demo)}
              >
                {demo.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <Select
            label="Select category"
            value={demoFilter.title}
            handleChange={(value) => setDemoFilter(demoObj[value])}
            options={demoOptions}
          />
        </div>
        <div
          className="demo-details"
          style={{
            marginBottom: '1rem',
            border: '1px solid #fee715',
            padding: '1rem',
          }}
        >
          <h3 className="h3 demo-title">{demoFilter.title}</h3>
          <p className="demo-description"><b>Description: </b>{demoFilter.description}</p>
          <p className="demo-purpose"><b>Purpose: </b>{demoFilter.purpose}</p>
          <div className="demo-technologies">
            <b>Technologies: </b>
            <ul style={{ marginLeft: '1rem' }}>
              {demoFilter.technologies.map(
                (technology, index) => (
                  <li key={index}>{technology}</li>
                )
              )}
            </ul>
          </div>
        </div>
        <hr style={{ marginBottom: '1rem', borderTopColor: '2px solid #fee715' }} />
        <Element key={demoFilter.title} />
      </section>
    </article>
  );
};
export default Demos;

