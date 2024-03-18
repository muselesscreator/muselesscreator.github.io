type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
  value: string;
};
const ContactItem = ({
  icon,
  title,
  href,
  value
}: ContactItemProps) => {
  return (
    <li className="contact-item">
      <div className="icon-box">
        {icon}
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        <a href={href} className="contact-link">{value}</a>
      </div>
    </li>
  );
};

export default ContactItem;
