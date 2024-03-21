import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

export const stateKeys = StrictDict({
  fullname: 'fullname',
  email: 'email',
  message: 'message',
}) as Record<string, string>;

export type ContactData = {
  fullname: string,
  email: string,
  message: string,
  isValid: boolean,
  handleNameChange: (e: { target: { value: string } }) => void,
  handleEmailChange: (e: { target: { value: string } }) => void,
  handleMessageChange: (e: { target: { value: string } }) => void,
};

const useContactData = (): ContactData => {
  const [fullname, setFullname] = useKeyedState<string>(stateKeys.fullname, '');
  const [email, setEmail] = useKeyedState<string>(stateKeys.email, '');
  const [message, setMessage] = useKeyedState<string>(stateKeys.message, '');

  const isValid = !!(fullname && email && message);

  return {
    fullname,
    email,
    message,
    isValid,
    handleNameChange: (e: { target: { value: string } }) => setFullname(e.target.value),
    handleEmailChange: (e: { target: { value: string } }) => setEmail(e.target.value),
    handleMessageChange: (e: { target: { value: string } }) => setMessage(e.target.value),
  }
};

export default useContactData;
