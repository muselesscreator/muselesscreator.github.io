type UserAvatarProps = {
  contactInfo: {
    name: string;
    avatar: string;
  };
}

const UserAvatar = ({ contactInfo }: UserAvatarProps) => {
  return (
    <figure className="avatar-box">
      <img src={contactInfo.avatar} alt={contactInfo.name} width="80" />
    </figure>
  );
};

export default UserAvatar;
