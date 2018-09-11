using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.LR_CodeGeneratorModule.Controllers
{
    /// <summary>
    /// 爱养车开发框架
    /// Copyright (c) 2013-2017 上海爱养车信息技术有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.09
    /// 描 述：JS插件Demo
    /// </summary>
    public class PluginDemoController : MvcControllerBase
    {
        #region 视图功能
        /// <summary>
        /// JS插件展示
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        #endregion
        
    }
}