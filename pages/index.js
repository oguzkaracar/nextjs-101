import Link from "next/link";
import Layout from "../components/Layout";
import slug from 'slug';

function HomePage({ characters }) {
	return (
		<Layout>
			<h1>Welcome to Next.js!</h1>

			<ul>
				{characters.results.map((result) => (
					<li key={result.id}>
						<Link href="/characters/[slug]" as={`/characters/${slug(result.name)}-${result.id}`}>
							<a>{result.name}</a>
						</Link>
					</li>
				))}
			</ul>

			{/* Styled jsx nextjs in sunmuş olduğu css-in-js stillendirme yöntemidir. scope bazlı bir stillendirme yapmamızı sağlar.. */}
			<style jsx>{`
				li {
					margin: 0.5em 0;
				}
				p {
					color: green;
				}
			`}</style>

			{/* Global elementlere erişmek için bu şekilde kullanılır. */}

			<style global jsx>{`
				body {
					background: #ccc;
				}
			`}</style>
		</Layout>
	);
}

export const getStaticProps = async () => {
	// getStaticProps ile API'den alınan verileri sayfa componentine props olarak verebiliriz... Bu fonksiyon server tarafında çalışıyor. console.log() yaparsak node console olarak görürüz..

	const res = await fetch("https://rickandmortyapi.com/api/character/");
	const characters = await res.json();

	return {
		props: {
			characters,
		},
	};
};

export default HomePage;
