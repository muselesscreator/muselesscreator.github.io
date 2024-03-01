import React from 'react';
import classNames from 'classnames';
import { demos } from './demos';
import DiceSpinners from './demos/DiceSpinners';
import {
  FaChevronDown,
  FaEye,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const Demos = () => {
  const [demoFilter, setDemoFilter] = React.useState(demos[0]);
  const handleCategoryChange = (category) => () => {
    console.log({ category });
    setDemoFilter(category)
  };
  const { Element } = demoFilter;
  console.log({ demoFilter });
  const demoObj = demos.reduce((acc, demo) => ({
    ...acc,
    [demo.title]: demo,
  }), {});
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
          <select
            className="filter-select"
            aria-label="Select category"
            onChange={(e) => setDemoFilter(demoObj[e.target.value])}
          >
            <option className="select-item">Select category <FaChevronDown /></option>
            {demos.map((demo) => (
              <option
                key={demo.title}
                className={classNames('select-item', { active: demoFilter.title === demo.title })}
              >
                {demo.title} <FaChevronDown />
              </option>
            ))}
          </select>
        </div>
        <Element key={demoFilter.title} />
      </section>
    </article>
  );
};
export default Demos;
