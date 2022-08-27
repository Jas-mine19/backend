let express = require('express');

let routes = require('./routes/category_routes');
let flower_routes = require('./routes/flower_routes');
let users_routes =  require('./routes/users_routes');
let basket_routes = require('./routes/basket_routes');
let favorite_routes = require('./routes/favorite_routes');
let advertising_routes = require('./routes/advertising_routes');


let app = express();

app.use(express.json());

app.use('/api/category/', routes);

app.use('/api/flower/', flower_routes);

app.use('/api/users/', users_routes);

app.use('/api/advertising/', advertising_routes);

app.use('/api/basket/', basket_routes);

app.use('/api/favorite/', favorite_routes);


app.listen(4000, function() {
	console.log('Server is starting on port 4000!');
});