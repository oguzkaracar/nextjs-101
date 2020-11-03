import Head from "next/head";

import Navigation from './Navigation';

const Layout = ({ children }) => {
	return (
		<div>
			{/* Seo için head component'ı */}
            <Head>
                <title>Oğuzhan Karaçar</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
			<Navigation />
			<main>{children}</main>
			<footer>Design by Oguzhan</footer>
		</div>
	);
};

export default Layout;
