"use strict";

var login_logic = {};

login_logic.Init = function () {
    var self = this;
    self.RegisterNetEvent();
    self.RegisterLogicEvent();
    self.account = null;
    self.password = null;
    self.login_path = "http://127.0.0.1:3000/login";
    self.register_path = "http://127.0.0.1:3000/register";
};

login_logic.RegisterNetEvent = function () {
    appNet.RegisterEvent("login_ret", function (data) {
        //load new scene
        cc.log("login success");
    });
};

login_logic.RegisterLogicEvent = function () {
    var self = this;

    appEvent.RegisterEvent("LOGIN_LOGIC", function (type, data) {
        switch (type) {
            case "MU77LOGIN":
                {
                    self.Mu77Login(data);
                }break;
            case "MU77REGISTER":
                {
                    self.Mu77Register(data);
                }break;
            case "LOGINSERVER":
                {
                    self.LoginServer();
                }break;
        }
    });
};

login_logic.LoginServer = function () {
    var self = this;
    var data = {};
    data.platform = appUtils.GetPlatform();
    data.account = self.account;
    data.password = self.password;
    data.version = "1.0.0";
    data.server_id = 1;
    data.device_id = "XEG-4L";
    data.device_type = "MI4";
    data.channel = "mu77";
    data.locale = "zh-CN";
    data.net_mode = "3G";
    data.device_platform = "IOS";
    var send_msg = { login: data };
    appNet.Send(send_msg);
};

login_logic.Mu77Login = function (msg) {
    var self = this;
    self.account = msg.account;
    self.password = msg.password;
    var post_data = { "action": "login", "account": msg.account, "password": msg.password };
    appUtils.SendPostRequest(self.login_path, post_data, function (content) {
        var value = JSON.parse(content);
        if (value.result == "success") {
            appEvent.DispatchEvent("LOGIN_VIEW_MODE", "SERVER_LIST");
        } else {
            //TODO 显示提示  登陆失败
        }
    });
};

login_logic.Mu77Register = function (msg) {
    var self = this;
    self.account = msg.account;
    self.password = msg.password;
    var result = false;
    var post_data = { "action": "register", "account": msg.account, "password": msg.password };
    appUtils.SendPostRequest(self.register_path, post_data, function (content) {
        var value = JSON.parse(content);
        if (value.result == "success") {
            appEvent.DispatchEvent("LOGIN_VIEW_MODE", "SERVER_LIST");
        } else {
            //TODO 显示提示  注册失败
        }
    });
};

module.exports = login_logic;