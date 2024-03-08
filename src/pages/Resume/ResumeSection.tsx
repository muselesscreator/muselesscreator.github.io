import 'react';
import { GiOpenBook } from 'react-icons/gi';

import { ResumeSectionType } from './data';
import FieldDisplay from './FieldDisplay';

const ResumeSection = ({ section, title }: { section: ResumeSectionType, title: string }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <GiOpenBook />
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      { section.items.map((item, index) => (
        <li className="timeline-item" key={index}>
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.date}</span>
          {item.fields.map((itemField, itemIndex) => (
            <FieldDisplay
              key={itemIndex}
              field={itemField}
              classNames={{ text: 'timeline-text' }}
            />
          ))}
        </li>
      ))}
    </ol>
  </section>
);

export default ResumeSection;
