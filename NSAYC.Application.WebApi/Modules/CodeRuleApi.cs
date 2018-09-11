using NSAYC.Application.Base.SystemModule;
using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NSAYC.Application.WebApi.Modules
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2018.01.04
    /// 描 述：编码规则
    /// </summary>
    public class CodeRuleApi: BaseApi
    {
        /// <summary>
        /// 注册接口
        /// </summary>
        public CodeRuleApi()
            : base("/learun/adms/coderule")
        {
            Get["/code"] = GetEnCode;// 获取数据字典详细列表
        }
        private CodeRuleIBLL codeRuleIBLL = new CodeRuleBLL();

        /// <summary>
        /// 获取数据字典详细列表
        /// </summary>
        /// <param name="_"></param>
        /// <returns></returns>
        private Response GetEnCode(dynamic _)
        {
            string req = this.GetReqData();// 获取模板请求数据
            var data = codeRuleIBLL.GetBillCode(req);
            return SuccessString(data);
        }
    }
}