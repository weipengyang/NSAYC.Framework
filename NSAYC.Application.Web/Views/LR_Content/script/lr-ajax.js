/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.03.16
 * 描 述：ajax操作方法
 */
(function ($, learun) {
    "use strict";
    var httpCode = {
        success: 200,
        fail: 400,
        exception: 500
    };
    var exres = { code: httpCode.exception, info: '通信异常，请联系管理员！' }
    $.extend(learun, {
        // http 通信异常的时候调用此方法
        httpErrorLog: function (msg) {
            NSAYC.log(msg);
        },
        // http请求返回数据码
        httpCode: httpCode,
        // get请求方法（异步）:url地址,callback回调函数
        httpAsyncGet: function (url, callback) {
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                async: true,
                cache: false,
                success: function (data) {
                    if (data.code == NSAYC.httpCode.exception) {
                        NSAYC.httpErrorLog(data.info);
                        data.info = '系统异常，请联系管理员！';
                    }
                    callback(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    NSAYC.httpErrorLog(textStatus);
                    callback(exres);
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
        },
        // get请求方法（同步）:url地址,param参数
        httpGet: function (url, param) {
            var res = {};
            $.ajax({
                url: url,
                data: param,
                type: "GET",
                dataType: "json",
                async: false,
                cache: false,
                success: function (data) {
                    if (data.code == NSAYC.httpCode.exception) {
                        NSAYC.httpErrorLog(data.info);
                        data.info = '系统异常，请联系管理员！';
                    }
                    res = data;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    NSAYC.httpErrorLog(textStatus);
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
            return res;
        },
        // post请求方法（异步）:url地址,param参数,callback回调函数
        httpAsyncPost: function (url, param, callback) {
            $.ajax({
                url: url,
                data: param,
                type: "POST",
                dataType: "json",
                async: true,
                cache: false,
                success: function (data) {
                    if (data.code == NSAYC.httpCode.exception) {
                        NSAYC.httpErrorLog(data.info);
                        data.info = '系统异常，请联系管理员！';
                    }
                    callback(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    NSAYC.httpErrorLog(textStatus);
                    callback(exres);
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
        },
        // post请求方法（同步步）:url地址,param参数,callback回调函数
        httpPost: function (url, param, callback) {
            $.ajax({
                url: url,
                data: param,
                type: "POST",
                dataType: "json",
                async: false,
                cache: false,
                success: function (data) {
                    if (data.code == NSAYC.httpCode.exception) {
                        NSAYC.httpErrorLog(data.info);
                        data.info = '系统异常，请联系管理员！';
                    }
                    callback(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    NSAYC.httpErrorLog(textStatus);
                    callback(exres);
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
        },
        // ajax 异步封装
        httpAsync: function (type, url, param, callback) {
            $.ajax({
                url: url,
                data: param,
                type: type,
                dataType: "json",
                async: true,
                cache: false,
                success: function (res) {
                    if (res.code == NSAYC.httpCode.success) {
                        callback(res.data);
                    }
                    else {
                        NSAYC.httpErrorLog(res.info);
                        callback(null);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    NSAYC.httpErrorLog(textStatus);
                    callback(null);
                },
                beforeSend: function () {
                },
                complete: function () {
                }
            });
        },

        deleteForm:function (url, param, callback) {
            NSAYC.loading(true, '正在删除数据');
            NSAYC.httpAsyncPost(url, param, function (res) {
                NSAYC.loading(false);
                if (res.code == NSAYC.httpCode.success) {
                    if (!!callback) {
                        callback(res);
                    }
                    NSAYC.alert.success(res.info);
                }
                else {
                    NSAYC.alert.error(res.info);
                    NSAYC.httpErrorLog(res.info);
                }
                layer.close(layer.index);
            });
        },
        postForm:function (url, param, callback) {
            NSAYC.loading(true, '正在提交数据');
            NSAYC.httpAsyncPost(url, param, function (res) {
                NSAYC.loading(false);
                if (res.code == NSAYC.httpCode.success) {
                    if (!!callback) {
                        callback(res);
                    }
                    NSAYC.alert.success(res.info);
                }
                else {
                    NSAYC.alert.error(res.info);
                    NSAYC.httpErrorLog(res.info);
                }
                layer.close(layer.index);
            });
        }
    });

})(window.jQuery, top.learun);