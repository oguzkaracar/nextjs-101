import useSWR from 'swr';

// Api den veri çektik.... useSWR kullanışlı bir react hooks library for data fetching

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const Users = () => {
  const { data, error } = useSWR('http://localhost:3000/api/users/2', fetcher);

  if (error) {
    return <div>Failed to load.</div>;
  }

  if (!data) return <div>Loading...</div>;

  return <div>
      <p>Hello {data.name}</p>
      <p>{data.username}</p>
      <p>{data.email}</p>
  </div>;
};

export default Users;
