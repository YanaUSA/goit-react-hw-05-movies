import { NavLinkStyle } from './Header.styled';
import { HeaderBox } from './Header.styled';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <HeaderBox>
      {navItems.map(({ href, text }) => (
        <NavLinkStyle to={href} key={href}>
          {text}
        </NavLinkStyle>
      ))}
    </HeaderBox>
  );
};
