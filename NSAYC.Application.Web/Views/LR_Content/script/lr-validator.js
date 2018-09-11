/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.03.16
 * 描 述：表单数据验证完整性
 */
(function ($, learun) {
    "use strict";
    
    $.lrValidformMessage = function ($this, errormsg) {
        /*错误处理*/
        $this.addClass('lr-field-error');
        $this.parent().append('<div class="lr-field-error-info" title="' + errormsg + '！"><i class="fa fa-info-circle"></i></div>');
        var validatemsg = $this.parent().find('.form-item-title').text() + ' ' + errormsg;
        NSAYC.alert.error('表单信息输入有误,请检查！</br>' + validatemsg);
        if ($this.attr('type') == 'lrselect') {
            $this.on('change', function () {
                removeErrorMessage($(this));
            });
        }
        else if ($this.attr('type') == 'formselect') {
            $this.on('change', function () {
                removeErrorMessage($(this));
            });
        }
        else if ($this.hasClass('lr-input-wdatepicker')) {
            $this.on('change', function () {
                var $input = $(this);
                if ($input.val()) {
                    removeErrorMessage($input);
                }
            });
        }
        else {
            $this.on('input propertychange', function () {
                var $input = $(this);
                if ($input.val()) {
                    removeErrorMessage($input);
                }
            });
        }
    };

    $.fn.lrRemoveValidMessage = function () {
        removeErrorMessage($(this));
    }

    $.fn.lrValidform = function () {
        var validateflag = true;
        var validHelper = NSAYC.validator;
        $(this).find("[isvalid=yes]").each(function () {
            var $this = $(this);

            if ($this.parent().find('.lr-field-error-info').length > 0) {
                validateflag = false;
                return true;
            }

            var checkexpession = $(this).attr("checkexpession");
            var checkfn = validHelper['is' + checkexpession];
            if (!checkexpession || !checkfn) { return false; }
            var errormsg = $(this).attr("errormsg") || "";
            var value;
            var type = $this.attr('type');
            if (type == 'lrselect') {
                value = $this.lrselectGet();
            }
            else if (type == 'formselect') {
                value = $this.lrformselectGet();
            }
            else {
                value = $this.val();
            }
            var r = { code: true, msg: '' };
            if (checkexpession == 'LenNum' || checkexpession == 'LenNumOrNull' || checkexpession == 'LenStr' || checkexpession == 'LenStrOrNull') {
                var len = $this.attr("length");
                r = checkfn(value, len);
            } else {
                r = checkfn(value);
            }
            if (!r.code) {
                validateflag = false;
                $.lrValidformMessage($this, errormsg + r.msg);
            }
        });
        return validateflag;
    }

    function removeErrorMessage($obj) {
        $obj.removeClass('lr-field-error');
        $obj.parent().find('.lr-field-error-info').remove();
    }

})(window.jQuery, top.learun);