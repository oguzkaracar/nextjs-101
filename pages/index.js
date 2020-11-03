import Head from "next/head";
import Layout from "../components/layout";

function HomePage() {
	return (
		<Layout>
			<h1>Welcome to Next.js!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid eius possimus quas libero reiciendis
				hic corrupti. Minima alias harum accusantium tenetur sapiente soluta, quia, exercitationem distinctio,
				tempora fugiat repellat.
			</p>

			{/* Styled jsx nextjs in sunmuş olduğu css-in-js stillendirme yöntemidir. scope bazlı bir stillendirme yapmamızı sağlar.. */}

			<style jsx>{`
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

export default HomePage;
