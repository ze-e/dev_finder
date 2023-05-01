import { formatHref } from 'utils';
import Item from './components/Item.component';
import LocIcon from 'assets/icon-location.svg';
import TwitterIcon from 'assets/icon-twitter.svg';
import WebIcon from 'assets/icon-website.svg';
import CompanyIcon from 'assets/icon-company.svg';
import styles from './Socials.module.scss';
interface Props {
  twitter_username?: string,
  location?: string,
  blog?: string,
  company?: string
}

const Socials: React.FC<Props> = ({ twitter_username, location, blog, company }) => {
  return (
    <ul className={styles.container}>
      <Item icon={LocIcon} alt="location" stat={location} />
      <Item icon={TwitterIcon} alt="twitter" stat={twitter_username} href={formatHref('twitter.com', twitter_username)}/>
      <Item icon={WebIcon} alt="website" stat={blog} href={blog}/>
      <Item icon={CompanyIcon} alt="company" stat={company} href={formatHref('github.com', company)}/>
    </ul>
  );
};

export default Socials;
