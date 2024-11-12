const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
	res.sendfile(_dirname + 'index.html');
});

app.post('/submit-form', (req, res) => {
  const username = req.body.username;
  console.log(`Form submission received: ${name}, ${email}, ${message}`);
  res.send('Form submission received!');
});

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
