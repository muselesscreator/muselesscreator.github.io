import 'react';

import SendIcon from '@mui/icons-material/Send';

import useContactData from './useContactData';

const About = () => {
  const {
    fullname,
    email,
    message,
    isValid,
    formAction,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
  } = useContactData();

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form method="POST" action={formAction} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={fullname as string}
              onChange={handleNameChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={email as string}
              onChange={handleEmailChange}
            />
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

export default About;
