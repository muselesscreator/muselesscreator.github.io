import useDemosData from './useDemosData';
import DemoDetails from './DemoDetails';
import DemoFilters from './DemoFilters';

const Demos = () => {
  const {
    loadedDemo,
    handleDemoChange,
    Element,
    demoOptions,
    setDemoByTitle,
  } = useDemosData();
  return (
    <article className="demos active">
      <header>
        <h2 className="h2 article-title">Demos</h2>
      </header>
      <section className="demos-text">
        <DemoFilters {...{ loadedDemo, handleDemoChange, demoOptions, setDemoByTitle }} />
        <DemoDetails {...{ loadedDemo }} />
        <hr style={{ marginBottom: '1rem', borderTopColor: '2px solid #fee715' }} />
        <Element key={loadedDemo.title} />
      </section>
    </article>
  );
};
export default Demos;

