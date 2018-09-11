using System.Web.Mvc;
using System.Web.Routing;

namespace NSAYC.Application.Web
{
    /// <summary>
    /// 爱养车开发框架
    /// Copyright (c) 2013-2017 上海爱养车信息技术有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.08
    /// 描 述：数据库类型枚举
    /// </summary>
    public class RouteConfig
    {
        /// <summary>
        /// 注册路由
        /// </summary>
        /// <param name="routes">路由控制器</param>
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Login", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
