using NSAYC.Application.OA;
using NSAYC.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.OAModule.Controllers
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.01
    /// 描 述：公告管理
    /// </summary>
    public class NoticeController : MvcControllerBase
    {
        private NoticeIBLL noticeIBLL = new NoticeBLL();

        #region 视图功能
        /// <summary>
        /// 管理页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// 表单页面
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
        /// 获取分页数据
        /// </summary>
        /// <param name="pagination">分页参数</param>
        /// <param name="keyword">关键词</param>
        /// <returns></returns>
        public ActionResult GetPageList(string pagination,string keyword)
        {
            Pagination paginationobj = pagination.ToObject<Pagination>();
            var data = noticeIBLL.GetPageList(paginationobj, keyword);
            var jsonData = new
            {
                rows = data,
                total = paginationobj.total,
                page = paginationobj.page,
                records = paginationobj.records,
            };
            return Success(jsonData);
        }
        /// <summary>
        /// 获取实体数据
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        public ActionResult GetEntity(string keyValue)
        {
            var data = noticeIBLL.GetEntity(keyValue);
            data.F_NewsContent = WebHelper.HtmlDecode(data.F_NewsContent);
            return Success(data);
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 保存表单数据
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <param name="entity">实体</param>
        /// <returns></returns>
        [HttpPost, ValidateAntiForgeryToken, AjaxOnly, ValidateInput(false)]
        public ActionResult SaveForm(string keyValue, NewsEntity entity)
        {
            entity.F_NewsContent = WebHelper.HtmlEncode(entity.F_NewsContent);
            noticeIBLL.SaveEntity(keyValue, entity);
            return Success("保存成功！");
        }
        /// <summary>
        /// 删除表单数据
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        [HttpPost]
        [AjaxOnly]
        public ActionResult DeleteForm(string keyValue)
        {
            noticeIBLL.DeleteEntity(keyValue);
            return Success("删除成功！");
        }
        #endregion
    }
}