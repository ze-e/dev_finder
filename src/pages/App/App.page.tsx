import  { useState, useEffect, useCallback} from 'react';
import { Header, Profile, Loading, Search } from 'components';
import UserData from "interface/UserData.interface";
import styles from './App.module.scss';
import config from 'api/config.json';

const App: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const getUser = useCallback(
   async(userName: string)=>{
      try {
        const res = await fetch(config.baseURL + userName);
        if (res.ok) {
          setUser(await res.json());
          setQuery('');
          setError('');
        } else {
          console.log(res);
          throw new Error('No results')
        };
      }
      catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
  },[]);

  useEffect(() => {
    getUser('octocat');
  }, [getUser])

  const handleSearch = () => {
    if(query.length) getUser(query);
  }

  return (
    <div className={styles.app}>
      <div className={styles.maxWidth}>
        <Header />
        <Search query={query} setQuery={setQuery} search={handleSearch} error={ error } />
        { user !== null ? <Profile userData={ user } /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
