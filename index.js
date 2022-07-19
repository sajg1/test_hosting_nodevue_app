const express;
const app = express();
const host = http://localhost
const port = 3000

// We'll be using the  public directory to serve the Vue app
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening on ${host}: ${port}`);
});
