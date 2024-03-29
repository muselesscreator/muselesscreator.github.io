export type StringField = { type: 'text', text: string };
export type ListField = { type: 'list', items: string[] };
export type PageField = StringField | ListField;
type PageData = {
  title: string;
  fields: PageField[];
};
const pageData = {
  title: 'About me',
  fields: [
    { type: 'text', text: 'With over a decade of software engineering, I specialize in helping teams produce solid, testable frontend-code and maintainable agile frontend development processes, as well as building and managing communities devoted to frontend communication, coordination, and training.' },
    { type: 'text', text: 'I have experience guiding large projects from conception, through ideation and refinement, implementation, validation, release, and maintenance, as well as coming into existing projects and codebases and updating them to a consistent level of quality.' },
    { type: 'text', text: 'My background in SQA and the odd variety of engineering tech my career has exposed me to give me a mindset and focus on maintainability of code and practices above all else.  I like to spend a bit of thoughtful effort now to make less work for everyone later.' },
    { type: 'text', text: 'My core goal in any code-base is not only to achieve excellent code, but specifically to make achieving excellence as easy as possible.  I have high standards for my code and the projects I own, but I also endeavor to provide tools, workflows, and utilities to allow developers to quickly build well-designed, easily-maintained, and highly/deeply tested code.' },
    { type: 'text', text: 'It has also been my experience that Agile workflows and processes are very effective for managing the engineering process, and have been pleased to be able to lead and teach multiple teams in development and refinement of effective Agile practices, with a focus on iteration, clarity of ceremonies, and focus/efficacy of meetings.' },
    { type: 'list', items: [
      'Senior Frontend/Full-Stack Software Engineer with 8+ years of experience with Python and Full-Stack Python/JavaScript Web development, with a focus on user interfaces, APIs, and testing methodologies.',
      'Experience developing in a variety of architectures, including web, mobile, asynchronous server applications, and  2D/3D gaming.',
      'Experience self-managing and leading on projects with complex requirements across departments and generating well defined, fully-featured, well-tested code.',
      'Experience with test automation, database design, and API design.',
    ] },
  ],
} as PageData;

export default pageData;
