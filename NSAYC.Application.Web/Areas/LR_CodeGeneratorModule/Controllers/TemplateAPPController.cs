using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.LR_CodeGeneratorModule.Controllers
{
    /// <summary>
    /// 爱养车开发框架
    /// Copyright (c) 2013-2017 上海爱养车信息技术有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.09
    /// 描 述：移动端代码生成器
    /// </summary>
    public class TemplateAPPController : MvcControllerBase
    {
        #region 视图功能
        public ActionResult Index()
        {
            return View();
        }
        #endregion
    }
}