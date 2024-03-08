import 'react';
import { StrictDict } from '@muselesscreator/strict-dict';

export type Field = ({
  type: 'text',
  text: string,
} | {
  type: 'list',
  title?: string,
  items: Field[],
});

export type ResumeSectionType = {
  items: {
    date: string,
    title: string,
    fields: Field[],
  }[],
};

type Resume = {
  resume: {
    education: ResumeSectionType,
    experience: ResumeSectionType,
  },
};


const pageData = StrictDict({
  resume: {
    education: {
      items: [
        {
          title: 'Tulane University',
          date: '2006 — 2011',
          fields: [
            { type: 'text', text: 'Bachelor of Science in Mathematics with minors in Music and "Music, Science and Technology".' },
          ],
        },
      ],
    },
    experience: {
      items: [
        {
          title: 'Senior Software Engineer II, UI-Lead - EdX/2U Inc, Boston, MA',
          date: '2020 - 2024',
          fields: [
            { type: 'text', text: 'I served as the Frontend technical leadership for my squad across formation and delivery of multiple projects, as well as serving as the Project Manager for later projects, including the Learner Home and ORA redesign projects.' },
            { type: 'text', text: 'My core priorities and contributions outside of project delivery came in the form of testing, community, and training.' },
            { type: 'list', title: 'Community-Building', items: [
              { type: 'text', text: 'Organized and managed the Fedx (frontend-at-edx) community, integrating rotating leadership, a manage-able charter, engineering leadership support/sponsorship, and well-defined responsibilities.' },
              { type: 'text', text: 'This community serves as the hub for frontend development across teams at a company with no formal frontend organization.  This provided us a place and avenue for discussing/resolving tricky “glue” type problems that affected many teams, but none specifically enough to get funding otherwise (dependency upgrades, pattern updates, adoption of new technology, definition and consolidation of coding standards).'},
            ] },
            { type: 'list', title: 'Training', items: [
              { type: 'text', text: 'In addition to training up a junior frontend dev on my team as well as training my backend devs to be comfortable working quickly and effectively in our React code, I spent a great deal of time training up developers on other teams on frontend development and testing techniques.' },
              { type: 'text', text: 'Organized and managed the frontend study group, and integrated it with the fedx community.  I wrote and ran a variety of training sessions on testing, hooks, react development, internal tools, typescript, and more.' },
            ] },
            { type: 'list', title: 'Testing', items: [
              { type: 'text', text: 'I maintain a high standard of testing in my projects, with a tendency to release with close to 100% test coverage.  I have a focus on accurate/easy unit tests that provide maximum value for minimum creation/maintenance time.' },
              { type: 'text', text: 'As part of my testing pattern, I have developed a testing library to serve as a replacement for Enzyme, which is getting deprecated in future versions of React, which has begun being used by members of the community to mass-overhaul testing patterns.' },
            ] },
          ],
        }, {
          title: 'Senior Software Engineer - ReadCoor Inc, Boston, MA',
          date: '2018 - 2020',
          fields: [
            { type: 'list', items: [
              { type: 'text', text: 'Facilitated technology comparison process across teams to determine in which new UI technology the disparate  User Interfaces at the company should work towards being re-written, managing to acquire broad buy-in  across multiple development teams with very different focuses and existing JS workflows.  • Succeeded in pushing to implement a stable Javascript development workflow, with documented coding  guidelines, UI-generation scripts, reusable plug-in JS components and modules, and a shared theming.' },
              { type: 'text', text: 'Lead re-write of multiple existing user interfaces into React/Redux.' },
              { type: 'text', text: 'Lead the requirements generation and implementation of the Customer Device Interface, providing control  over all the parts of the genetic sequencing scan setup and run procedure, with input from and co-ordination  with UX designer. As part of this process, I helped lead the generation of initial design and requirements,  provided 90% of JS implementation, facilitated/lead backend API updates/integration, and generated a full  set of requirements in Testlink along with a development manual test plan for engineer testers.' },
            ] },
          ],
        }, {
          title: 'Software Engineer, UI Lead - Optimus Ride, Boston, MA',
          date: '2017 — 2018',
          fields: [
            { type: 'list', items: [
              { type: 'text', text: 'As Lead UI Developer, implemented web-based customer-facing User Interfaces in React/Redux, targeted at  many levels of customer, including rider, dispatchers, vehicle operators, and fleet managers.' },
              { type: 'text', text: 'As Scrum Master for Fleet Software team: designed and enforced an agile system to bring structure to a  disorganized team. Implemented 2-week sprints, with regular agile meetings, resulting in improved output,  and vastly improved targeting of priorities by enforcing a structure around requirements-gathering and  problem definition from stakeholders.' },
              { type: 'text', text: 'As SW Engineer, built python backend services in support of web user interfaces, allowing tracking of a  meta-contextual state across system components and tracking/controlling the data driving the user  experience workflow throughout and across all user levels/types.' },
            ]}
          ],
        }, {
          title: 'Software Engineer, Software Engineer II - Bio-Rad, Boston MA',
          date: '2014 — 2017',
          fields: [
            { type: 'list', items: [
              { type: 'text', text: 'As Project Manager for the Customer User Interface: managed coordination between manufacturing,  marketing, biology, and software departments, along with an external UX contracting firm, to produce a  touch-screen user interface for the MonoRAyL system.' },
              { type: 'text', text: 'As Lead Developer for the Customer User Interface: produced a touch-screen web app based around a  Python web server, responsible for guiding the user through the steps of an experiment, while also managing  the hardware interaction, data access, user management, and software/firmware updates.' },
              { type: 'text', text: 'As Lead Developer for the Internal Development User Interface: produced a complex, robust one-page app  providing control over all aspects of the complex biomedical microfluidic device:' },
              { type: 'list', items: [
                { type: 'text', text: 'Provided controls and status readouts for over 40 physical sensors and interfaces, including: electrodes,  cameras, stepper motors, thermal plates, pressure pumps/valves, lasers, and LEDs' },
                { type: 'text', text: 'Provided sub-tools for manufacturing and software teams allowed management of all running sub processes and internal flags for the system as well as interactive tools for running end-of-line testing and  managing machine configurations.' },
                { type: 'text', text: 'Developed and maintained tools and APIs for inter-process communication, database management and interaction, unit testing, asynchronous process coordination, and hardware interactions.' },
              ]},
            ]},
          ],
        }, {
          title: 'Co-Founder/Lead Developer - Nerd Pile Gaming, Boston, MA',
          date: '2013 — 2016',
          fields: [
            { type: 'text', text: 'For the studio’s first iOS/Android release, Farmageddon' },
            { type: 'list', items: [
              { type: 'text', text: 'Lead Developer, implementing core gameplay APIs in Lua using CoronaSDK.' },
              { type: 'text', text: 'Lead Sound Engineer, producing sound effects, voice overs and seven music compositions.' },
            ] },
            { type: 'text', text: 'Post-Farmageddon' },
            { type: 'list', items: [
              { type: 'text', text: 'Lead Developer for further projects in Unity' },
              { type: 'text', text: 'Developed 2D and 3D interfaces for a variety of puzzle games' },
              { type: 'text', text: 'Lead Sound Engineer, four music compositions for PuzzlePlanets' },
            ] },
          ],
        },
      ],
    },
  },
});

export default pageData as Resume;
