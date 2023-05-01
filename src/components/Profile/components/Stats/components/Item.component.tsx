import styles from './Item.module.scss';

interface Props {
  label: string,
  stat: number | string,
}

const Item: React.FC<Props> = ({ label, stat }) => {
  return (
    <li className={styles.container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.stat}>{stat}</p>
    </li>
  );
};

export default Item;
