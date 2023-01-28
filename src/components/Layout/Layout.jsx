import { Header } from '../Header/Header';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense>
        <main>{children}</main>
      </Suspense>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
