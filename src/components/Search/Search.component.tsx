import styles from './Search.module.scss';
interface Props {
  query: string;
  setQuery: Function;
  search: Function;
  error?: string;
}

const Search: React.FC<Props> = ({ query, setQuery, search, error }) => {
  
  const checkValidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.checkValidity();
  }

  return (
    <section className={styles.search}>
      <form onSubmit={(e) => { e.preventDefault(); search(); }}>
        <div className={styles.inputContainer} >
          <input className={styles.input} type='search' minLength={4} maxLength={39} required placeholder='Search Github...' value={query} onChange={(e) => { checkValidity(e); setQuery(e.target.value); }} />
          <span className={styles.searchIcon}></span>
          <button className={styles.button} disabled={!query || !checkValidity} type='submit'>Search</button>
          <p className={styles.error}>{error}</p>
        </div>
      </form>
    </section>
  )
}

export default Search;