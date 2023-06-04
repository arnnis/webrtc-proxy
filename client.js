const { Peer } = require('peerjs')
const fetch = require('node-fetch');
const WebSocket = require('ws');
const WebRTC = require('wrtc');
const FileReader = require('filereader');

const polyfills = { fetch, WebSocket, WebRTC, FileReader };

const peer = new Peer({ polyfills});

const conn = peer.connect("1c29b505-e629-4947-a583-dbad30b3b971");

conn.on("open", (data) => {
    console.log("connected to server")
    conn.on("data", (data) => {
        console.log('Received', data);
    });
});

