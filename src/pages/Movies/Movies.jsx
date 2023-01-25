import { useState, useEffect } from 'react';
import { useSearchParams, Link, Outlet } from 'react-router-dom';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { getSearchedFilms } from '../../service-api/service-api';

export const Movies = () => {
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    getSearchedFilms(query).then(response => {
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
        {query &&
          searchedFilms.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </main>
  );
};
