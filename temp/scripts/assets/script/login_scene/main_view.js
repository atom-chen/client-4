"use strict";
cc._RFpush(module, '947c5tunv1LVrvNExtGUsCt', 'main_view');
// script/login_scene/main_view.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        login_anim: sp.Skeleton,
        register_node: cc.Node,
        server_panel: cc.Node,
        bottom_panel: cc.Node,
        server_msgbox: cc.Node,
        table_view: cc.Node,
        test_btn: cc.Button
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;

        self.login_anim.addAnimation(1, "loop_1", true, 1);

        self.InitProject();
        self.RegisterLogicEvent();

        self.test_btn.node.on('click', function () {
            var server_list = self.table_view.getComponent("tableview");
            var data = [{ name: "逗比1" }, { name: "逗比2" }, { name: "逗比3" }, { name: "逗比4" }, { name: "逗比5" }, { name: "逗比6" }, { name: "逗比7" }, { name: "逗比8" }, { name: "逗比9" }];
            server_list.LoadData(data, true);
        });
    },

    RegisterLogicEvent: function RegisterLogicEvent() {
        var self = this;
        //主界面只负责UI的显示管理
        appEvent.RegisterEvent("LOGIN_VIEW_MODE", function (type, data) {
            self.SetViewMode(type, data);
        });
    },

    SetViewMode: function SetViewMode(type, data) {
        var self = this;
        switch (type) {
            case "SERVER_LIST":
                {
                    appUtils.Show(self.server_panel);
                    appUtils.Hide(self.register_node);
                }break;
            case "BACK_LOGIN":
                {
                    appNet.DisConnect();
                    appUtils.Hide(self.server_panel, self.register_node);
                    appUtils.Show(self.bottom_panel);
                }break;
            case "SERVER_MSGBOX":
                {
                    appUtils.Show(self.server_msgbox);
                }break;
            case "REGISTER_PANEL":
                {
                    appUtils.Show(self.register_node);
                }break;
        }
    },

    InitProject: function InitProject() {

        window.appNet = require("network");
        window.appNet.Init();
        window.appEvent = require("event_dispatcher")();
        window.appEvent.Init();
        window.appUtils = require("utils");

        var login_logic = require("login_logic");
        login_logic.Init();
    }
});

cc._RFpop();