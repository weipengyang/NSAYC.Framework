using System.Net;
using System.Web.Helpers;
using System.Web.Mvc;

namespace NSAYC.Application.Web
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.08
    /// 描 述：防伪验证
    /// </summary>
    public class HandlerValidateAntiForgeryTokenAttribute:AuthorizeAttribute
    {
        /// <summary>
        /// 拦截器
        /// </summary>
        /// <param name="filterContext">http上下文</param>
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            var request = filterContext.HttpContext.Request;
            if (request.HttpMethod == WebRequestMethods.Http.Post)
            {
                if (request.IsAjaxRequest())
                {
                    var antiForgeryCookie = request.Cookies[AntiForgeryConfig.CookieName];
                    var cookieValue = antiForgeryCookie != null
                     ? antiForgeryCookie.Value
                     : null;
                    //从cookies 和 Headers 中 验证防伪标记
                    //这里可以加try-catch
                    AntiForgery.Validate(cookieValue, request.Headers["__RequestVerificationToken"]);
                }
                else
                {
                    new ValidateAntiForgeryTokenAttribute().OnAuthorization(filterContext);
                }
            }
        }
    }
}