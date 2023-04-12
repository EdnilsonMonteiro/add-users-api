import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
	return (

		<Container>
			<Header />
			
				{props.children}

			{/*<Footer></Footer>*/}

		</Container>

	);
};

export default Layout;
