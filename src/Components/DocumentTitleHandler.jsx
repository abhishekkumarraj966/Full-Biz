import  { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const DocumentTitleHandler = () => {
    const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home';
        break;
      case '/contactus':
        document.title = 'Contact Us';
        break;
      case '/aboutus':
        document.title = 'About us';
        break;
      case '/affilatepg':
        document.title = 'Affiliate Program';
        break;
      case '/careers':
        document.title = 'Careers';
        break;
      case '/testimonials':
        document.title = 'Testimonials';
        break;
      case '/faq':
        document.title = 'FAQ';
        break;
      case '/privacypolicy':
        document.title = 'Privacy Policy';
        break;
      case '/returnsrefunds':
        document.title = 'Returns and Refunds';
        break;
      case '/cookieguidelines':
        document.title = 'Cookie Guidelines';
        break;
      case '/termsconditions':
        document.title = 'Terms and Conditions';
        break;
      case '/blogpg':
        document.title = 'Blog';
        break;
      case '/login':
        document.title = 'Login';
        break;
      case '/signeup':
        document.title = 'Sign Up';
        break;
      case '/howItWorks':
        document.title = 'How It Works';
        break;
      case '/nextsigneup':
        document.title = 'Next Sign Up';
        break;
      case '/searchpage':
        document.title = 'Search';
        break;
      case '/category':
        document.title = 'Category';
        break;
      default:
        document.title = 'Your Website';
    }
  }, [location.pathname]);
  return null;
}

export default DocumentTitleHandler