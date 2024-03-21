import contactInfo from '~/data/contact';

const UserAvatar = () => (
  <figure className="avatar-box">
    <img src={contactInfo.avatar} alt={contactInfo.name} width="80" />
  </figure>
);

export default UserAvatar;
