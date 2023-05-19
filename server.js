// W3Spaces SERVER

require('dotenv').config({ path: './w3s-dynamic-storage/.env' });
const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
// App
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('images-partial'));
app.use(express.static(path.join(__dirname, 'resources')));
// app.use(express.static('resources'));

//  tell the express server to recognise incoming data as JSON
app.use(express.json({limit: '1mb'}));

const fs = require('fs');

const os = require('os');

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

app.listen(PORT, HOST);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log(`Running on http://${HOST}:${PORT}` + ' ' + Date().slice(0,25));

// SERVER REQUESTS LOG start
app.all('*', (req, res) => {
    console.log('--------------------------------------------------------------------------------');
//     console.log('incoming socket.remoteAddress:- "' + req.socket.remoteAddress + '"');
//     console.log('incoming socket.remoteAddress:- "' + req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress);
//     // const v_ipAddress = req.socket.remoteAddress;
//     const v_ipAddress = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
//     console.log('incoming IP address:- ' + v_ipAddress + ' ' + Date().slice(0,25));
    console.log('req.method:- ' + req.method + ' ' + Date().slice(0,25));
//     console.log('req.body:- ' + req.body);
    console.log('req.body:- ' + req + ' \n' + Date().slice(0,25));


//     const v_ipAddressForwarded = req.headers['x-forwarded-for'];
    console.log('total memory:- ',os.totalmem()/1000000000);
    console.log('free memory:- ',os.freemem()/1000000000);
//     console.log(`incoming IP address:-  ${v_ipAddress}`);
//     console.log(`app.all req.connection.remoteAddressForwarded:- ${v_ipAddressForwarded}`);
    console.log('app.all req.url:- ', req.url);
    console.log(`app.all req date:- ${Date().slice(0, 25)}\n`);

    switch (req.url) {
        case '/parseRawCSV_TTevents':
            console.log('SWITCH:- app.all req.url:- ', req.url + ' ' + Date().slice(0,25));
            parseRawCSV_TTevents(req,res);
            break;
    }
});
// SERVER REQUESTS LOG end

// PARSE CSV start
async function parseRawCSV_TTevents(req,res){
    console.log(req.body);
    console.log('');
    async function main(req,res){
        try {
            console.log(path.join(__dirname, 'resources/') + "tt_favourite_events.txt");
            // await fs.readFile(req.body.v_filePathAndName, 'utf8', function (err, data) {
            await fs.readFile(path.join(__dirname, 'resources/') + "tt_favourite_events.txt", 'utf8', function (err, data) {
                console.log('fs.readFile data:- ' + data);
                console.log('fs.readFile err:- ' + err);
                console.log('');
                const v_data = JSON.stringify(
                    {
                        v_csvData: data.split("\n")
                    }
                );
                res.send(v_data);
                res.end();
                console.log(v_data);
                console.log('/parseRawCSV_TTevents data sent to client:- ' + Date().slice(0,25));
                console.log('');
            });
        }
        catch {
        }
        finally {
        }
    }
    main(req,res);
};
// PARSE CSV end