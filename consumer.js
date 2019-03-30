var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'Posts', partition: 0 }
        ],
        {
            autoCommit: false
        },
        {
            fromOffset: 'earliest',
        }
    );

console.log("Started");

consumer.on('ready', function () {
    console.log('Consumer ready!');
});

consumer.on('message', function (message) {
    console.log("In message");
    console.log(message);
});

consumer.on('error', function (err) {
    console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
})