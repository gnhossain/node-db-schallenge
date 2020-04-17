const server = require("./server");

const port = process.env.PORT || 5050;

server.get('/', (req, res) => {
    res.send(`
      <p>Api Works</p>
    `);
  });

server.listen(port, () => {
  console.log(`\n *** server running on http://localhost:${port} ***`);
});