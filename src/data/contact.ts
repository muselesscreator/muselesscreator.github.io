import { StrictDict } from '@muselesscreator/strict-dict';
import avatar from '../assets/ampersand.png';

export type ContactInfo = {
  name: string;
  email: string;
  title: string;
  phone: string;
  phoneRaw: string;
  github: string;
  linkedIn: string;
  avatar: string;
};

const contactInfo = StrictDict({
  name: 'Ben Warzeski',
  email: 'bwarzesk@gmail.com',
  title: 'Full-Stack Software Engineer',
  phone: '+1 (941) 387-5092',
  phoneRaw: '19413875092',
  github: 'https://www.github.com/muselesscreator',
  linkedIn: 'https://www.linkedin.com/in/benjamin-warzeski-69111518/',
  avatar,
}) as ContactInfo;

export default contactInfo;
