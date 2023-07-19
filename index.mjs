import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

var posts = [
  { text: "Hello, this is post 0" },
  { text: "Welcome to post 1" },
  { text: "Post number 2 here!" },
];

app.get('/post/:id', (req, res) => {
  const id = Number(req.params.id);
  res.send(posts[id]);
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/post', (req, res) => {
  posts.push(req.body);
  res.send(`New post added successfully! Now we have ${posts.length} posts.`);
});

app.put('/post/:id', (req, res) => {
  const id = Number(req.params.id);
  posts[id] = req.body;
  res.send(posts[id]);
});

app.delete('/post/:id', (req, res) => {
  const id = Number(req.params.id);
  delete posts[id];
  res.send("Post deleted successfully.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App server is listening at http://localhost:${PORT}`);
});
