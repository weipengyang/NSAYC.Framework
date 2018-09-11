/*
 * 版 本 NSAYCFrameWork V1.1.0 力软敏 捷开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端 开发组
 * 日 期：2017.03.16
 * 描 述：tab窗口操作方法
 */
(function ($, learun) {
    "use strict";
    //初始化菜单和tab页的属性Id
    var iframeIdList = {};

    NSAYC.frameTab = {
        iframeId: '',
        init: function () {
            NSAYC.frameTab.bind();
        },
        bind: function () {
            $(".lr-frame-tabs-wrap").mCustomScrollbar({ // 优化滚动条
                axis: "x",
                theme: "minimal-dark"
            });
           
        },
        setCurrentIframeId: function (iframeId) {
            NSAYC.iframeId = iframeId;
        },
        open: function (module, notAllowClosed) {
            var $tabsUl = $('#lr_frame_tabs_ul');
            var $frameMain = $('#lr_frame_main');

            if (iframeIdList[module.F_ModuleId] == undefined || iframeIdList[module.F_ModuleId] == null) {
                // 隐藏之前的tab和窗口
                if (NSAYC.frameTab.iframeId != '') {
                    $tabsUl.find('#lr_tab_' + NSAYC.frameTab.iframeId).removeClass('active');
                    $frameMain.find('#lr_iframe_' + NSAYC.frameTab.iframeId).removeClass('active');
                    iframeIdList[NSAYC.frameTab.iframeId] = 0;
                }
                var parentId = NSAYC.frameTab.iframeId;
                NSAYC.frameTab.iframeId = module.F_ModuleId;
                iframeIdList[NSAYC.frameTab.iframeId] = 1;

                // 打开一个功能模块tab_iframe页面
                var $tabItem = $('<li class="lr-frame-tabItem active" id="lr_tab_' + module.F_ModuleId + '" parent-id="' + parentId + '"  ><span><i class="' + module.F_Icon + '"></i>&nbsp;' + module.F_FullName + '</span></li>');
                if (!notAllowClosed) {
                    $tabItem.append('<span class="reomve" title="关闭窗口"></span>');
                }
                var $iframe = $('<iframe class="lr-frame-iframe active" id="lr_iframe_' + module.F_ModuleId + '" frameborder="0" src="' + $.rootUrl + module.F_UrlAddress + '"></iframe>');
                $tabsUl.append($tabItem);
                $frameMain.append($iframe);

                $(".lr-frame-tabs-wrap").mCustomScrollbar("update");
                $(".lr-frame-tabs-wrap").mCustomScrollbar("scrollTo", $tabItem);

                //绑定一个点击事件
                $tabItem.on('click', function () {
                    var id = $(this).attr('id').replace('lr_tab_', '');
                    NSAYC.frameTab.focus(id);
                });
                $tabItem.find('.reomve').on('click', function () {
                    var id = $(this).parent().attr('id').replace('lr_tab_', '');
                    NSAYC.frameTab.close(id);
                    return false;
                });

                if (!!NSAYC.frameTab.opencallback) {
                    NSAYC.frameTab.opencallback();
                }
                if (!notAllowClosed) {
                    $.ajax({
                        url: top.$.rootUrl + "/Home/VisitModule",
                        data: { moduleName: module.F_FullName, moduleUrl: module.F_UrlAddress },
                        type: "post",
                        dataType: "text"
                    });
                }
            }
            else {
                NSAYC.frameTab.focus(module.F_ModuleId);
            }
        },
        focus: function (moduleId) {
            if (iframeIdList[moduleId] == 0) {
                // 定位焦点tab页
                $('#lr_tab_' + NSAYC.frameTab.iframeId).removeClass('active');
                $('#lr_iframe_' + NSAYC.frameTab.iframeId).removeClass('active');
                iframeIdList[NSAYC.frameTab.iframeId] = 0;

                $('#lr_tab_' + moduleId).addClass('active');
                $('#lr_iframe_' + moduleId).addClass('active');
                NSAYC.frameTab.iframeId = moduleId;
                iframeIdList[moduleId] = 1;

                $(".lr-frame-tabs-wrap").mCustomScrollbar("scrollTo", $('#lr_tab_' + moduleId));

                if (!!NSAYC.frameTab.opencallback) {
                    NSAYC.frameTab.opencallback();
                }
            }
        },
        leaveFocus: function () {
            $('#lr_tab_' + NSAYC.frameTab.iframeId).removeClass('active');
            $('#lr_iframe_' + NSAYC.frameTab.iframeId).removeClass('active');
            iframeIdList[NSAYC.frameTab.iframeId] = 0;
            NSAYC.frameTab.iframeId = '';
        },
        close: function (moduleId) {
            delete iframeIdList[moduleId];

            var $this = $('#lr_tab_' + moduleId);
            var $prev = $this.prev();// 获取它的上一个节点数据;
            if ($prev.length < 1) {
                $prev = $this.next();
            }
            $this.remove();
            $('#lr_iframe_' + moduleId).remove();
            if (moduleId == NSAYC.frameTab.iframeId && $prev.length > 0) {
                var prevId = $prev.attr('id').replace('lr_tab_', '');

                $prev.addClass('active');
                $('#lr_iframe_' + prevId).addClass('active');
                NSAYC.frameTab.iframeId = prevId;
                iframeIdList[prevId] = 1;

                $('.lr-frame-tabs').css('width', '10000px');
                $(".lr-frame-tabs-wrap").mCustomScrollbar("update");
                $('.lr-frame-tabs').css('width', '100%');
                $(".lr-frame-tabs-wrap").mCustomScrollbar("scrollTo", $prev);
            }
            else {
                if ($prev.length < 1) {
                    NSAYC.frameTab.iframeId = "";
                }
                $('.lr-frame-tabs').css('width', '10000px');
                $(".lr-frame-tabs-wrap").mCustomScrollbar("update");
                $('.lr-frame-tabs').css('width', '100%');
            }

            if (!!NSAYC.frameTab.closecallback) {
                NSAYC.frameTab.closecallback();
            }
        }
        // 获取当前窗口
        ,currentIframe: function () {
            var ifameId = 'lr_iframe_' + NSAYC.frameTab.iframeId;
            if (top.frames[ifameId].contentWindow != undefined) {
                return top.frames[ifameId].contentWindow;
            }
            else {
                return top.frames[ifameId];
            }
        }
        ,parentIframe: function () {
            var ifameId = 'lr_iframe_' + top.$('#lr_tab_'+NSAYC.frameTab.iframeId).attr('parent-id');
            if (top.frames[ifameId].contentWindow != undefined) {
                return top.frames[ifameId].contentWindow;
            }
            else {
                return top.frames[ifameId];
            }
        }


        , opencallback: false
        , closecallback: false
    };

    NSAYC.frameTab.init();
})(window.jQuery, top.learun);