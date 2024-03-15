import 'react';
import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

const stateKeys = StrictDict({
  fullname: 'fullname',
  email: 'email',
  message: 'message',
}) as Record<string, string>;

const useContactData = () => {
  const [fullname, setFullname] = useKeyedState<string>(stateKeys.fullname, '');
  const [email, setEmail] = useKeyedState<string>(stateKeys.email, '');
  const [message, setMessage] = useKeyedState<string>(stateKeys.message, '');

  const isValid = fullname && email && message;

  const formAction = 'https://formspree.io/f/mkndboev';

  return {
    fullname,
    email,
    message,
    isValid,
    formAction,
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value),
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value),
  }
};

export default useContactData;
