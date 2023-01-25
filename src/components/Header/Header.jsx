import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <header style={{ padding: 20, backgroundColor: 'azure' }}>
      {navItems.map(({ href, text }) => (
        <NavLink style={{ margin: 10, padding: 10 }} to={href} key={href}>
          {text}
        </NavLink>
      ))}
    </header>
  );
};
