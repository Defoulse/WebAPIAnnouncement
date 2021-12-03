const queries = require('./queries');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route("/announcements").get((request, response) => {
    queries.getAnnouncements().then(result => {
        response.json(result[0]);
    })
})

router.route("/announcements/:id").get((request, response) => {
    queries.getAnnouncement(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route("/announcement").post((request, response) => {
    let announcement = {...request.body}
    queries.addAnnouncement(announcement).then(result => {
        response.status(201).json(result);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API is running at ' + port);
