import contactInfo from '~/data/contact';

const UserInfo = () => (
  <div className="info-content">
    <h1 className="name" title={contactInfo.name}>{contactInfo.name}</h1>
    <p className="title">{contactInfo.title}</p>
  </div>
);

export default UserInfo;
