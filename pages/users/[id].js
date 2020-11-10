import { useRouter } from 'next/router';
import useSWR from 'swr';

// characters sayfasındaki character dynamic routeları nextjs tarafından geliştirilen getStaticPaths ve getStaticProps serverSide data fetching ile çekildi..

// Bu sayfa ise (users - users/id) ClientSide Rendering ve browser - ClientSide data fetching ile yapıldı..

// ServerSide data fecthing prefetch yaparsak, sayfa yüklenmesi animasyonları ve durumları (loading, spinner gibi şeyler) kullanmamıza gerek yoktur. Daha hızlı render edilen sayfalar elde ederiz...

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`http://localhost:3000/api/users/${id}`, fetcher);

  return (
    <>
      {data ? (
        <div>
          <p>
            Slug ==={'>'} {id}
          </p>
          <h1>User: {data.username}</h1>
          <p>id: {data.id}</p>
          <p>name: {data.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

// server side data fetching....

// export const getStaticPaths = async () => {
//   const res = await fetch('http://localhost:3000/api/users/');
//   const users = await res.json();
//   console.log(users);
//   const paths = users.map(user => {
//     return { params: { id: `${user.id}` } };
//   });

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const id = params.id;
//   console.log(id);
//   const res = await fetch(`http://localhost:3000/api/users/${id}`);
//   const user = await res.json();
//   console.log(user);
//   return {
//     props: {
//       user,
//     },
//   };
// };

export default User;
