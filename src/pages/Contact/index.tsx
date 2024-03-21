import SendIcon from '@mui/icons-material/Send';

import useContactData from './useContactData';

export const formAction = 'https://formspree.io/f/mkndboev';

const Contact = () => {
  const {
    fullname,
    email,
    message,
    isValid,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
  } = useContactData();

  const inputs = [
    {
      type: 'text',
      name: 'fullname',
      placeholder: 'Full name',
      value: fullname,
      onChange: handleNameChange,
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
      value: email,
      onChange: handleEmailChange,
    },
  ];

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form method="POST" action={formAction} className="form" data-form>
          <div className="input-wrapper">
            {...inputs.map((input) => (
              <input
                key={input.name}
                type={input.type}
                name={input.name}
                className="form-input"
                placeholder={input.placeholder}
                required
                value={input.value as string}
                onChange={input.onChange}
              />
            ))}
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={message as string}
            onChange={handleMessageChange}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isValid}>
            <SendIcon />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
