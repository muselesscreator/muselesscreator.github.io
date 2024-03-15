import Demo from './types';
const DemoDetails = ({ loadedDemo }: { loadedDemo: Demo }) => (
  <div
    className="demo-details"
    style={{
      marginBottom: '1rem',
      border: '1px solid #fee715',
      padding: '1rem',
    }}
  >
    <h3 className="h3 demo-title">{loadedDemo.title}</h3>
    <p className="demo-description"><b>Description: </b>{loadedDemo.description}</p>
    <p className="demo-purpose"><b>Purpose: </b>{loadedDemo.purpose}</p>
    <div className="demo-technologies">
      <b>Technologies: </b>
      <ul style={{ marginLeft: '1rem' }}>
        {loadedDemo.technologies.map(
          (technology, index) => (
            <li key={index}>{technology}</li>
          )
        )}
      </ul>
    </div>
  </div>
);

export default DemoDetails;
