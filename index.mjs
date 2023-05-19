//  set the port number for the server
var v_portNumber = process.argv[2];
if (v_portNumber == undefined) {
    console.log('Port Number not provided.');
    v_portNumber = 1974;
    console.log('Port Number assigned is:- ', v_portNumber);
} else {
    console.log('Port Number argument/option:- ',v_portNumber);
}

// const express = require('express');
import express from 'express';
const app = express();

// const fs = require('fs');
import fs from 'fs';

// const os = require('os');
import os from 'os';

//  tell the express server to host static files in the 'public' folder
app.use(express.static(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'css'));
app.use(express.static(path.join(__dirname, 'images-partial'));
app.use(express.static(path.join(__dirname, 'js'));
app.use(express.static(path.join(__dirname, 'resources')));
console.log('path:- ' + path);
console.log('__dirname:- ' + __dirname);

//  tell the express server to recognise incoming data as JSON
app.use(express.json({limit: '1mb'}));
console.log('Server is recognising JSON');

// start the server
app.listen( process.env.PORT || v_portNumber, () => { 
  console.log('TT server is listening at port ' + v_portNumber + '\n');
});
console.log(Date().slice(0,25));

// SERVER REQUESTS LOG start
app.all('*', (req, res) => {
    console.log('incoming socket.remoteAddress:- "' + req.socket.remoteAddress + '"');
    console.log('incoming socket.remoteAddress:- "' + req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress);
    // const v_ipAddress = req.socket.remoteAddress;
    const v_ipAddress = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    console.log('incoming IP address:- ' + v_ipAddress + ' ' + Date().slice(0,25));
    console.log('req.method:- ' + req.method);
    console.log('req.body:- ' + req.body);
    console.log('req.body:- ' + req);


    const v_ipAddressForwarded = req.headers['x-forwarded-for'];
    console.log('total memory:- ',os.totalmem()/1000000000);
    console.log('free memory:- ',os.freemem()/1000000000);
    console.log(`incoming IP address:-  ${v_ipAddress}`);
    console.log(`app.all req.connection.remoteAddressForwarded:- ${v_ipAddressForwarded}`);
    console.log('app.all req.url:- ', req.url);
    console.log(`app.all req date:- ${Date().slice(0, 25)}\n`);

    switch (req.url) {
        case '/parseRawCSV_TTevents':
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
            // await fs.readFile(req.body.v_filePathAndName, 'utf8', function (err, data) {
            await fs.readFile("resources\\tt_favourite_events.txt", 'utf8', function (err, data) {
                // console.log('fs.readFile data:- ' + data);
                console.log('fs.readFile err:- ' + err);
                console.log('');
                const v_data = JSON.stringify(
                    {
                        v_csvData: data.split("\n")
                    }
                );
                res.send(v_data);
                res.end();
                // console.log(v_data);
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