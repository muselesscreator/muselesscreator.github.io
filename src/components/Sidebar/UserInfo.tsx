type UserInfoProps = {
  contactInfo: {
    name: string;
    title: string;
  };
};

const UserInfo = ({ contactInfo }: UserInfoProps) => {
  return (
    <div className="info-content">
      <h1 className="name" title={contactInfo.name}>{contactInfo.name}</h1>
      <p className="title">{contactInfo.title}</p>
    </div>
  );
};

export default UserInfo;
