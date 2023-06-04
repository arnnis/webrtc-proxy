const { Peer } = require('peerjs')
const fs = require('fs');
const fetch = require('node-fetch');
const WebSocket = require('ws');
const WebRTC = require('wrtc');
const FileReader = require('filereader');
const {Blob} = require('node:buffer');
fileReader = new FileReader()

window = { Blob }

const polyfills = { fetch, WebSocket, WebRTC, FileReader };

const peer = new Peer({ polyfills});

peer.on("open", (id ) => {
    console.log("Server: opened", id);

});

peer.on("connection", (conn) => {
	conn.on("open", () => {
        const file = fs.readFileSync(__dirname + '/1.mp4')

        fileReader.readAsArrayBuffer(file)

        fileReader.on('data', function (data) {
            console.log("chunkSize:", data.length);
            conn.send(data)
          });
	});

});