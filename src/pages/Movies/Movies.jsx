import { useState, useEffect } from 'react';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { getSearchedFilms } from '../../service-api/service-api';

export const Movies = () => {
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }

    getSearchedFilms(query).then(response => {
      if (!response) {
        return;
      }
      setSearchedFilms(response);
    });
  }, [query]);

  const onSearchSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main style={{ padding: 20, backgroundColor: 'palevioletred' }}>
      <SearchForm onChange={onSearchSubmit} />
      <ul>
        {searchedFilms.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};
