import React, { useState } from 'react';
import Seo from './Seo';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Modal from './Modal';
// import { useViewPort } from '../hooks/viewPort';
import '../styles/index.scss';
import * as styles from './Layout.module.scss';

const Layout = ({ children, title, description, category }) => {
	const [minimized, updateMinimized] = useState(false);
	return (
		<div className={styles.layout}>
			<Seo pageTitle={title} pageDescription={description} lang="en" />
			<Header minimized={minimized} updateMinimized={updateMinimized} />
			<div className={styles.nonHeader}>
				<Modal
					className={styles.navModal}
					show={minimized}
					updateShow={updateMinimized}
				>
					<NavBar selected={category} />
				</Modal>
				<NavBar selected={category} minimized={minimized} />
				<main>
					<div className={styles.pageBody}>
						<article>{children}</article>
					</div>
					<Footer />
				</main>
			</div>
		</div>
	);
};

export default Layout;
