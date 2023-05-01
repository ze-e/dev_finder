import Item from './components/Item.component';
import styles from './Stats.module.scss';

interface Props {
  followers: number,
  following: number,
  public_repos: number,
}

const Stats: React.FC<Props> = ({ followers, following, public_repos }) => {
  return (
    <ul className={styles.container}>
      <Item label='Repos' stat={public_repos} />
      <Item label='Followers' stat={followers} />
      <Item label='Following' stat={following} />
    </ul>
  );
};

export default Stats;
