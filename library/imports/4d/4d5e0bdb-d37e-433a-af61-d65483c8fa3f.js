"use strict";

var protobuf = require("protobuf");

var network = {};

network.Init = function () {
    var self = this;
    self.socket = null;

    protobuf.Init();

    self.Connect();
};

network.Connect = function () {
    var self = this;
    var url = "ws://127.0.0.1:8888";
    if (self.socket) return;
    self.socket = new WebSocket(url);
    self.socket.onopen = function (event) {
        cc.log("onopen");
    };

    self.socket.onerror = function (event) {
        cc.log("-------------onerror", event);
    };

    self.socket.onclose = function (event) {
        console.log("---------------onclose", event);
    };
    //需要判断是原生环境还是浏览器环境，如果是浏览器环境websocket收到的data将是BLOB类型，需要将BLOB类型转换为ArrayBuffer
    self.socket.onmessage = function (event) {
        var fileReader = new FileReader();
        fileReader.onload = function (progressEvent) {
            var arrayBuffer = this.result; // arrayBuffer即为blob对应的arrayBuffer 
            var msg = protobuf.decode(arrayBuffer);
            cc.log("data=>", JSON.stringify(msg));
        };
        fileReader.readAsArrayBuffer(event.data);
    };
};

network.DisConnect = function () {
    var self = this;
};

network.Send = function (msg) {
    var self = this;
    if (!self.socket) return;
    var buffer = protobuf.encode(msg);
    self.socket.send(buffer);
};
module.exports = network;