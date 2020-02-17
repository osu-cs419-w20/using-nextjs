const users = [
  {
    id: 1,
    name: "Luke Skywalker"
  }
];

export default function (req, res) {
  if (req.method === 'GET') {
    res.status(200).send(users);
  } else if (req.method === 'POST') {
    const name = req.body.name;
    users.push({
      name: name,
      id: users.length + 1
    });
    res.status(201).end();
  }
}
