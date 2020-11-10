import useSWR from 'swr';
import Link from 'next/link';
import Layout from '../../components/Layout';

// Api den veri çektik.... useSWR kullanışlı bir react hooks library for clientSide data fetching

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const Users = () => {
  const { data, error } = useSWR('http://localhost:3000/api/users/', fetcher);

  if (error) {
    return <div>Failed to load.</div>;
  }

  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      {data.map(dat => (
        <div key={dat.id}>
          <h4>Hello {dat.name}</h4>
          <Link href="/users/[id]" as={`/users/${dat.id}`}>
            <a>{dat.username}</a>
          </Link>
          <p>{dat.email}</p>
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export default Users;
