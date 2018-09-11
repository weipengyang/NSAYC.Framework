/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.03.16
 * 描 述：权限验证模块
 */
(function ($, learun) {
    "use strict";

    $.fn.lrAuthorizeJfGrid = function (op) {
        var _headData = [];
        $.each(op.headData, function (id, item) {
            if (!!lrModuleColumnList[item.name.toLowerCase()]) {
                _headData.push(item);
            }
        });
        op.headData = _headData;
        $(this).jfGrid(op);
    }

    $(function () {
        function btnAuthorize() {
            if (!!lrModuleButtonList) {
                var $container = $('[learun-authorize="yes"]');
                $container.find('[id]').each(function () {
                    var $this = $(this);
                    var id = $this.attr('id');
                    if (!lrModuleButtonList[id]) {
                        $this.remove();
                    }
                });
                $container.find('.dropdown-menu').each(function () {
                    var $this = $(this);
                    if ($this.find('li').length == 0) {
                        $this.remove();
                    }
                });
                $container.css({ 'display': 'inline-block' });
            }
            else {
                setTimeout(btnAuthorize,100);
            }
        }
        btnAuthorize();
    });

})(window.jQuery, top.learun);