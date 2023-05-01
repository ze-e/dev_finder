import styles from './Avatar.module.scss';

interface Props {
  avatar_url: string;
}

const Avatar: React.FC<Props> = ({ avatar_url }) => {
  return (
    <img className={styles.avatar} src={avatar_url} alt='user avatar' />
  );
};

export default Avatar;
