import 'react';

import pageData from './data';
import ResumeSection from './ResumeSection';

const Resume = () => {
  const { resume } = pageData;
  const { education, experience } = resume;
  return (
     <article className="resume active">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
       <ResumeSection section={education} title="Education" />
       <ResumeSection section={experience} title="Experience" />
    </article>
  );
};

export default Resume;
