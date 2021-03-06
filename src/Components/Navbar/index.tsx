import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiMenu, BiX } from 'react-icons/bi';
import { Button } from '../../styles';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MenuIcon,
	Menu,
	MenuItem,
	MenuLink,
	MenuItemBtn,
	MenuLinkBtn,
} from './styles';

const Navbar: React.FC = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 700) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);
	window.addEventListener('resize', showButton);

	return (
		<div>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavIcon />
							Home Made
						</NavLogo>
						<MenuIcon onClick={handleClick}>
							{click ? <BiX /> : <BiMenu />}
						</MenuIcon>

						<Menu onClick={handleClick} click={click}>
							<MenuItem>
								<MenuLink onClick={closeMenu} to="/">
									Feedback
								</MenuLink>
							</MenuItem>
							<MenuItem>
								<MenuLink onClick={closeMenu} to="/signIn">
									Sign In
								</MenuLink>
							</MenuItem>
							<MenuItemBtn>
								{button ? (
									<MenuLinkBtn to="/">
										<Button primary>Sign Up</Button>
									</MenuLinkBtn>
								) : (
									<MenuItem>
										<MenuLink onClick={closeMenu} to="/">
											Sign Up
										</MenuLink>
									</MenuItem>
								)}
							</MenuItemBtn>
						</Menu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</div>
	);
};

export default Navbar;
