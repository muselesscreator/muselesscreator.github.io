export type ContactItemProps = {
  IconEl: React.FC;
  title: string;
  href: string;
  value: string;
};
const ContactItem = ({
  IconEl,
  title,
  href,
  value
}: ContactItemProps) => (
  <li className="contact-item">
    <div className="icon-box">
      <IconEl />
    </div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      <a href={href} className="contact-link">{value}</a>
    </div>
  </li>
);

export default ContactItem;
