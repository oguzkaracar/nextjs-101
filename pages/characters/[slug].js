import Layout from '../../components/Layout';
import slug from 'slug';

import { useRouter } from 'next/router';

function CharacterDetail({ character }) {
  // useRouter hook'u ile route objesine direkt olarak erişim sağlayarak, ilgili dynamic route path ya da slug değerini alabiliriz... Statik datalarda daha kullanışlı olabilir..

  const router = useRouter();
  const id = router.query.slug.split('-').slice(-1, [0]);
  const { slug } = router.query;
  return (
    <Layout>
      <h1>{character.name}</h1>
      <p>Character id: {id} </p>
      <p>Slug: {slug} </p>
      <img src={character.image} alt="character-img" />
    </Layout>
  );
}

// ** getStaticPath' i dinamik olarak oluşturulan routeların datalarına erişmek için kullanırız, ve bu dataları birer route a dönüştürürüz. böylece pathleri nextjs'in önceden bilmesi ve pre-render etmesi için kullanırız. route pathlerini ise getStaticProps ile component'a aktararak ilgili datayla işlemlere devam ederiz.

export const getStaticPaths = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await res.json();

  // api den gelen tüm dataları ve path isimlerini(id) almak için, önce api'den muhtemel tüm dataları çekerek, nextjs tarafından önceden hazırlanması için paths dizisi olarak, statictProps a aktarıcaz.

  const paths = characters.results.map(character => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }; // pathleri bir obje olarak ve params propertysi ile gönderiyoruz.
  });

  return {
    paths,
    fallback: false, // true olursa eşleşmeyen diğer tüm routelar 404 olucak. fallbackPage hazırlanırsa ona yönlendirecek, (useRouter ile tespit edilir ve yönlendirilir.)
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.slug.split('-').slice(-1);

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return {
    props: {
      character, // single character objesini props olarak component'da kullanabileceğiz...
    },
  };
};

export default CharacterDetail;
