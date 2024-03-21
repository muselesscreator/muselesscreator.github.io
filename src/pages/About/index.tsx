import pageData, { PageField } from './pageData';


export const mapFields = (d: PageField, i: number) => {
  const { type } = d;
  if (type === 'text') {
    return (<p key={i}>{d.text}</p>);
  }
  if (type === 'list') {
    return (
      <ul key={i}>
        {d.items.map((l, j) => <li key={j}>{l}</li>)}
      </ul>
    );
  }
};

const About = () => (
  <article className="about active">
    <header>
      <h2 className="h2 article-title">{pageData.title}</h2>
    </header>
    <div className="about-text">
      {pageData.fields.map(mapFields)}
    </div>
  </article>
);

export default About;
