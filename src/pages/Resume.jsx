import 'react';
import { GiOpenBook } from 'react-icons/gi';

const Resume = () => {
  return (
     <article className="resume active">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <GiOpenBook />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Tulane University</h4>
              <span>2007 — 2011</span>
              <p className="timeline-text">
                Bachelor of Science in Mathematics with minors in Music and "Music, Science and Technology".
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <GiOpenBook />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Software Engineer II, UI-Lead - EdX/2U Inc, Boston, MA</h4>
              <span>2020 - 2024</span>
              <p className="timeline-text">
                I served as the Frontend technical leadership for my squad across formation and delivery of multiple projects, as well as serving as the Project Manager for later projects, including the Learner Home and ORA redesign projects.
              </p>
              <p className="timeline-text">
                My core priorities and contributions outside of project delivery came in the form of testing, community, and training.
              </p>
              <b className="timeline-text">Community-Building</b>
              <ul className="timeline-text">
                <li>Organized and managed the Fedx (frontend-at-edx) community, integrating rotating leadership, a manage-able charter, engineering leadership support/sponsorship, and well-defined responsibilities.</li>
                <li>This community serves as the hub for frontend development across teams at a company with no formal frontend organization.  This provided us a place and avenue for discussing/resolving tricky “glue” type problems that affected many teams, but none specifically enough to get funding otherwise (dependency upgrades, pattern updates, adoption of new technology, definition and consolidation of coding standards).</li>
              </ul>
              <b className="timeline-text">Training</b>
              <ul className="timeline-text">
                <li>In addition to training up a junior frontend dev on my team as well as training my backend devs to be comfortable working quickly and effectively in our React code, I spent a great deal of time training up developers on other teams on frontend development and testing techniques.</li>
                <li>Organized and managed the frontend study group, and integrated it with the fedx community.  I wrote and ran a variety of training sessions on testing, hooks, react development, internal tools, typescript, and more.</li>
              </ul>
              <b className="timeline-text">Testing</b>
              <ul className="timeline-text">
                <li>I maintain a high standard of testing in my projects, with a tendency to release with close to 100% test coverage.  I have a focus on accurate/easy unit tests that provide maximum value for minimum creation/maintenance time.</li>
                <li>As part of my testing pattern, I have developed a testing library to serve as a replacement for Enzyme, which is getting deprecated in future versions of React, which has begun being used by members of the community to mass-overhaul testing patterns.</li>
              </ul>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Software Engineer - ReadCoor Inc, Boston, MA</h4>
              <span>2018 - 2020</span>
              <p className="timeline-text">
                <ul>
                  <li>Facilitated technology comparison process across teams to determine in which new UI technology the disparate  User Interfaces at the company should work towards being re-written, managing to acquire broad buy-in  across multiple development teams with very different focuses and existing JS workflows.  • Succeeded in pushing to implement a stable Javascript development workflow, with documented coding  guidelines, UI-generation scripts, reusable plug-in JS components and modules, and a shared theming.</li>
                  <li> Lead re-write of multiple existing user interfaces into React/Redux.</li>
                  <li>Lead the requirements generation and implementation of the Customer Device Interface, providing control  over all the parts of the genetic sequencing scan setup and run procedure, with input from and co-ordination  with UX designer. As part of this process, I helped lead the generation of initial design and requirements,  provided 90% of JS implementation, facilitated/lead backend API updates/integration, and generated a full  set of requirements in Testlink along with a development manual test plan for engineer testers.</li>
                </ul>
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer, UI Lead - Optimus Ride, Boston, MA</h4>
              <span>2017 — 2018</span>
              <p className="timeline-text">
                <ul>
                  <li>As Lead UI Developer, implemented web-based customer-facing User Interfaces in React/Redux, targeted at  many levels of customer, including rider, dispatchers, vehicle operators, and fleet managers.</li>
                  <li>As Scrum Master for Fleet Software team: designed and enforced an agile system to bring structure to a  disorganized team. Implemented 2-week sprints, with regular agile meetings, resulting in improved output,  and vastly improved targeting of priorities by enforcing a structure around requirements-gathering and  problem definition from stakeholders.</li>
                  <li>As SW Engineer, built python backend services in support of web user interfaces, allowing tracking of a  meta-contextual state across system components and tracking/controlling the data driving the user  experience workflow throughout and across all user levels/types.</li>
                </ul>
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer, Software Engineer II - Bio-Rad, Boston MA</h4>
              <span>2014 — 2017</span>
              <ul className="timeline-text">
                <li>As Project Manager for the Customer User Interface: managed coordination between manufacturing,  marketing, biology, and software departments, along with an external UX contracting firm, to produce a  touch-screen user interface for the MonoRAyL system.</li>
                <li>As Lead Developer for the Customer User Interface: produced a touch-screen web app based around a  Python web server, responsible for guiding the user through the steps of an experiment, while also managing  the hardware interaction, data access, user management, and software/firmware updates.</li>
                <li>As Lead Developer for the Internal Development User Interface: produced a complex, robust one-page app  providing control over all aspects of the complex biomedical microfluidic device.</li>
                <ul>
                  <li>Provided controls and status readouts for over 40 physical sensors and interfaces, including: electrodes,  cameras, stepper motors, thermal plates, pressure pumps/valves, lasers, and LEDs</li>
                  <li>Provided sub-tools for manufacturing and software teams allowed management of all running sub processes and internal flags for the system as well as interactive tools for running end-of-line testing and  managing machine configurations.</li>
                  <li>Developed and maintained tools and APIs for inter-process communication, database management and interaction, unit testing, asynchronous process coordination, and hardware interactions.</li>
                </ul>
              </ul>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Co-Founder/Lead Developer - Nerd Pile Gaming, Boston, MA</h4>
              <span>2013 — 2016</span>
              <ul className="timeline-text">
                <li>For the studio’s first iOS/Android release, <em>Farmageddon</em></li>
                <ul>
                  <li>Lead Developer, implementing core gameplay APIs in Lua using CoronaSDK.</li>
                  <li>Lead Sound Engineer, producing sound effects, voice overs and seven music compositions.</li>
                </ul>
                <li>Post-<em>Farmageddon</em></li>
                <ul>
                  <li>Lead Developer for further projects in Unity</li>
                  <li>Developed 2D and 3D interfaces for a variety of puzzle games</li>
                  <li>Lead Sound Engineer, four music compositions for PuzzlePlanets</li>
                </ul>
              </ul>
            </li>
          </ol>
        </section>
      </article>
  );
};

export default Resume;
