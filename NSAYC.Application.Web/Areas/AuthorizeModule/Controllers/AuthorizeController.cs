using NSAYC.Application.Base.AuthorizeModule;
using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.AuthorizeModule.Controllers
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：功能权限设置
    /// </summary>
    public class AuthorizeController : MvcControllerBase
    {
        private AuthorizeIBLL authorizeIBLL = new AuthorizeBLL();

        #region 获取视图
        /// <summary>
        /// 功能权限设置
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Form()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 获取设置信息
        /// </summary>
        /// <param name="objectId">设置对象</param>
        /// <returns></returns>
        [HttpGet]
        [AjaxOnly]
        public ActionResult GetFormData(string objectId)
        {
            var modules = authorizeIBLL.GetItemIdList(objectId, 1);
            var buttons = authorizeIBLL.GetItemIdList(objectId, 2);
            var columns = authorizeIBLL.GetItemIdList(objectId, 3);
            var datajson = new
            {
                modules = modules,
                buttons = buttons,
                columns = columns
            };
            return Success(datajson);
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 保存表单数据
        /// </summary>
        /// <param name="objectId">对象Id</param>
        /// <param name="objectType">权限分类-1角色2用户</param>
        /// <param name="moduleIds">功能Id</param>
        /// <param name="moduleButtonIds">按钮Id</param>
        /// <param name="moduleColumnIds">视图Id</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        [AjaxOnly]
        public ActionResult SaveForm(string objectId,int objectType, string strModuleId, string strModuleButtonId, string strModuleColumnId)
        {
            string[] moduleIds = strModuleId.Split(',');
            string[] moduleButtonIds = strModuleButtonId.Split(',');
            string[] moduleColumnIds = strModuleColumnId.Split(',');
            authorizeIBLL.SaveAuthorize(objectType, objectId, moduleIds, moduleButtonIds, moduleColumnIds);
            return Success("保存成功！");
        }
        #endregion
    }
}