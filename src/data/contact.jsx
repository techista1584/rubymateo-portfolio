import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import { Socials } from '../components/Socials/Socials';

export const contactInfo = [
  {
    id: 1,
    icon: FaPhoneAlt,
    description: 'Call Me',
    child: (
      <a
        style={{
          textDecoration: 'none',
          color: '#000000',
          fontSize: '20px',
          transition: 'color 0.5s ease',
        }}
        href="tel:+639453611838"
        onMouseOver={(e) => e.currentTarget.style.color = '#e85044'}
        onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
      >
        + 639453611838
      </a>
    ),
  },

  {
    id: 2,
    icon: FaShareAlt,
    description: 'Social Profiles',
    child: <Socials />,
  },
];
