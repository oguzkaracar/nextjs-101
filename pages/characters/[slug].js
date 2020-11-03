import Layout from "../../components/Layout";
import slug from "slug";

function CharacterDetail({ character }) {
	return (
		<Layout>
			<h1>{character.name}</h1>
			<img src={character.image} alt="character-img" />
			
		</Layout>
	);
}

// ** getStaticPath ile dinamik olarak oluşturulan routeların datalarına erişmek için, pathleri nextjs'in önceden bilmesi ve pre-render etmesi için kullanırız. route pathlerini ise getStaticProps aktararak ilgili datayı props olarak component'a iletecez...!

export const getStaticPaths = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character/");
	const characters = await res.json();

	// api den gelen tüm dataları ve path isimlerini(id) almak için, önce api'den muhtemel tüm dataları çekerek, nextjs tarafından önceden hazırlanması için paths dizisi olarak, statictProps a aktarıcaz.

	const paths = characters.results.map((character) => {
		return { params: { slug: `${slug(character.name)}-${character.id}` } }; // pathleri bir obje olarak ve params propertysi ile gönderiyoruz.
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const id = params.slug.split("-").slice(-1);

	const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
	const character = await res.json();
	return {
		props: {
			character, // single character objesini props olarak component'da kullanabileceğiz...
		},
	};
};

export default CharacterDetail;
