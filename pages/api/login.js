import jwt from 'jsonwebtoken';

// login api route..

const KEY = 'askdjaskdasdmasldmöasldas123kljasod';

export default (req, res) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Error' });
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin',
      },
      KEY
    ),
  });
};
