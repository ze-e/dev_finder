import { ReactNode } from 'react';
import styles from './Item.module.scss';

interface Props {
  icon: string,
  alt: string,
  stat?: string,
  href?: string,
}

interface WrapperProps {
  children: ReactNode,
  href?: string,
  stat?: string,
}


const Item: React.FC<Props> = ({ icon, alt, href, stat }) => {
  const placeholder = 'Not Available';
  return (
      <ItemWrapper href={href} stat={stat}>
        <img className={styles.icon} src={icon} alt={alt} />
        <p className={`${styles.text} ${Boolean(!stat) && 'blank'}`}>{stat ? stat : placeholder}</p>
      </ItemWrapper>
  );
};

const ItemWrapper : React.FC<WrapperProps> = ({ children, href, stat }) => {
  return (
    Boolean(stat && href) ? <a className={styles.container} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a> : <div className={styles.container}>{children}</div>
  );
};

export default Item;
