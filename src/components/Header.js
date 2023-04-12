import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form} from 'react-bootstrap';

const Header = (props) => {
	return (
		<Navbar className="mt-2 mb-3 px-2" style={{ borderRadius: '5px' }} bg="light" expand="lg">
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse>
				<Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<Nav.Link>Home</Nav.Link>
				</Nav>
			</Navbar.Collapse>
					
		</Navbar>
	)
}

export default Header;
