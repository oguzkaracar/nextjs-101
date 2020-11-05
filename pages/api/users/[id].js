export default async (req, res) => {
  const {
    query: { id },
  } = req;

  console.log(req.query);

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await result.json();

  res.status(200).json(data);
};
