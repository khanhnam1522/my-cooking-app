import React from 'react';
import { NavbarContainer, NavLogo, NavIcon } from './styles';

const LogoNav: React.FC = () => (
	<NavbarContainer>
		<NavLogo to="/">
			<NavIcon />
			Home Made
		</NavLogo>
	</NavbarContainer>
);

export default LogoNav;
