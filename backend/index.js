const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Tic Tac Toe API');
});

app.post('/game/result', (req, res) => {
  const { winner, moves } = req.body;
  console.log(`Game Over! Winner: ${winner}`, moves);
  res.status(200).send('Result received');
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
