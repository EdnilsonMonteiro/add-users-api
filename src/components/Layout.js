import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
	return (

		<Container className="mt-3">
			
				{props.children}

			{/*<Footer></Footer>*/}

		</Container>

	);
};

export default Layout;
