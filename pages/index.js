import Link from 'next/link';
import Layout from '../components/Layout';
import slug from 'slug';

function HomePage({ characters }) {
  return (
    <Layout>
      <div className="title">
        <h2>Welcome to Next.js!</h2>
      </div>
      <p>Next.js Öğreniyorum...</p>
      <ul>
        {characters.results.map(result => (
          <li key={result.id}>
            {/* [slug] dynamic bir route olduğunu belirtir. as ile route'un hangi isimli ya da hangi id olduğunu belirtiriz. Client tarafında nasıl gözükeceğini belirleriz.. */}
            <Link
              href="/characters/[slug]"
              as={`/characters/${slug(result.name)}-${result.id}`}>
              <a>{result.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Styled jsx nextjs in sunmuş olduğu css-in-js stillendirme yöntemidir. component bazlı bir stillendirme yapmamızı sağlar.. */}
      <style jsx>{`
        li {
          margin: 0.5em 0;
        }
        p {
          color: orangered;
        }
      `}</style>

      {/* Global elementlere erişmek için bu şekilde kullanılır. global props'ı eklenmelidir. sadece bu sayfada global olarak yapılan stillendirmeleri göreceğiz. Diğer sayfalardaki global stillendirmelere etkisi yoktur!!! */}

      <style global jsx>{`
        body {
          padding-bottom: 30px;
          border: 2px solid #deda12;
        }
      `}</style>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // getStaticProps (getServersideProps) ile API'den alınan verileri sayfa componentine props olarak verebiliriz... Bu fonksiyon server tarafında çalışıyor. console.log() yaparsak node console olarak görürüz.. Datayı Build time da bir kere (fetch ederek) çekerek, component'a props olarak göndeririz.

  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
};

export default HomePage;
