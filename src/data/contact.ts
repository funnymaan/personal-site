import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/funnyman',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'weixin://dl/business/?t=A3108323996',
    label: '微信',
    icon: faWeixin,
  },
  {
    link: 'mailto:3108323996@qq.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
