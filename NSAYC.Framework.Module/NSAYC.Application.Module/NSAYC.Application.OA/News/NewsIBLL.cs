﻿using NSAYC.Util;
using System.Collections.Generic;

namespace NSAYC.Application.OA
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：新闻管理
    /// </summary>
    public interface NewsIBLL
    {
        #region 获取数据
        /// <summary>
        /// 新闻列表
        /// </summary>
        /// <param name="pagination">分页参数</param>
        /// <param name="categoryId">类型</param>
        /// <param name="keyword">关键词</param>
        /// <returns></returns>
        IEnumerable<NewsEntity> GetPageList(Pagination pagination, string keyword);
        /// <summary>
        /// 新闻公告实体
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <returns></returns>
        NewsEntity GetEntity(string keyValue);
        #endregion

        #region 提交数据
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="keyValue">主键</param>
        void DeleteEntity(string keyValue);
        /// <summary>
        /// 保存（新增、修改）
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <param name="newsEntity">新闻公告实体</param>
        /// <returns></returns>
        void SaveEntity(string keyValue, NewsEntity newsEntity);
        #endregion
    }
}