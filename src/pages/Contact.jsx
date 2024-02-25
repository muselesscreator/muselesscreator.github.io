import 'react';
import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

const stateKeys = StrictDict({
  fullname: 'fullname',
  email: 'email',
  message: 'message',
});

const About = () => {
  const [fullname, setFullname] = useKeyedState(stateKeys.fullname, '');
  const [email, setEmail] = useKeyedState(stateKeys.email, '');
  const [message, setMessage] = useKeyedState(stateKeys.message, '');

  const isValid = fullname && email && message;

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form method="POST" action="https://formspree.io/f/mkndboev" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isValid}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default About;
