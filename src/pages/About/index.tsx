import 'react';

import pageData from './pageData';

const About = () => {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">{pageData.title}</h2>
      </header>
      <div className="about-text">
        {pageData.fields.map((d, i) => {
          const { type } = d;
          if (type === 'text') {
            return (<p key={i}>{d.text}</p>);
          } else if (type === 'list') {
            return (<ul key={i}>
              {d.items.map((l, j) => <li key={j}>{l}</li>)}
            </ul>);
          }
        })}
      </div>
    </article>
  );
};

export default About;
