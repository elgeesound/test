const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors')

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  console.log(req.body);
  fs.readFile(path.join(__dirname, '../testData/MOCK_DATA.json'), 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send(data);
  });
});



app.listen(3000, () => {
  console.log('Express is listening to port 3000');
})
