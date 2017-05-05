module.exports = require("protobufjs").newBuilder({})['import']({
    "package": null,
    "syntax": "proto2",
    "messages": [
        {
            "name": "C2GS",
            "syntax": "proto2",
            "fields": [
                {
                    "rule": "optional",
                    "type": "msg.login.Login",
                    "name": "login",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "msg.login.Logout",
                    "name": "logout",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "msg.login.Reconnect",
                    "name": "reconnect",
                    "id": 5
                }
            ]
        },
        {
            "name": "GS2C",
            "syntax": "proto2",
            "fields": [
                {
                    "rule": "optional",
                    "type": "msg.login.LoginRet",
                    "name": "login_ret",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "msg.login.LogoutRet",
                    "name": "logout_ret",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "msg.login.ReconnectRet",
                    "name": "reconnect_ret",
                    "id": 5
                }
            ]
        },
        {
            "name": "msg",
            "fields": [],
            "syntax": "proto2",
            "messages": [
                {
                    "name": "login",
                    "fields": [],
                    "syntax": "proto2",
                    "messages": [
                        {
                            "name": "Login",
                            "syntax": "proto2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "account",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "password",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "platform",
                                    "id": 3
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "version",
                                    "id": 4
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "server_id",
                                    "id": 5
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "device_id",
                                    "id": 6
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "device_type",
                                    "id": 7
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "channel",
                                    "id": 8
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "locale",
                                    "id": 9
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "net_mode",
                                    "id": 10
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "device_platform",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "LoginRet",
                            "syntax": "proto2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "server_time",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "user_id",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "reconnect_token",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "time_zone",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "Reconnect",
                            "syntax": "proto2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "user_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "reconnect_token",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "ReconnectRet",
                            "syntax": "proto2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint32",
                                    "name": "server_time",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "time_zone",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "Logout",
                            "syntax": "proto2",
                            "fields": []
                        },
                        {
                            "name": "LogoutRet",
                            "syntax": "proto2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Result",
                                    "name": "reason",
                                    "id": 1
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "Result",
                            "syntax": "proto2",
                            "values": [
                                {
                                    "name": "success",
                                    "id": 0
                                },
                                {
                                    "name": "auth_failure",
                                    "id": 1
                                },
                                {
                                    "name": "invalid_pwd",
                                    "id": 2
                                },
                                {
                                    "name": "account_not_exist",
                                    "id": 3
                                },
                                {
                                    "name": "error_pwd",
                                    "id": 4
                                },
                                {
                                    "name": "version_too_low",
                                    "id": 5
                                },
                                {
                                    "name": "server_is_busy",
                                    "id": 6
                                },
                                {
                                    "name": "reconnect_failure",
                                    "id": 7
                                },
                                {
                                    "name": "repeated_login",
                                    "id": 8
                                }
                            ]
                        }
                    ],
                    "isNamespace": true
                }
            ],
            "isNamespace": true
        }
    ],
    "isNamespace": true
}).build();