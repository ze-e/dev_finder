import styles from './Bio.module.scss';
import {formatDate} from 'utils';
interface Props {
  name?: string,
  login: string,
  url: string,
  bio?: string,
  created_at: string,
}

const Bio: React.FC<Props> = ({ name, login, url, bio, created_at }) => {
  const placeHolder = 'This profile has no bio';
  return (
    <div className={styles.container}>
      <div className={styles.bioContainer}>
        <h1>{name ? name : login}</h1>
        <h3 className={styles.subtitle}>{'@'+login}</h3>
        <p className={`${styles.description} ${!bio && 'blank'}`}>{bio ? bio : placeHolder}</p>
      </div>
      <h3 className={styles.date}>Joined {formatDate(created_at)}</h3>
    </div>
  );
};

export default Bio;
