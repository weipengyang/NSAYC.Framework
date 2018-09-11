using System.Collections.Generic;

namespace NSAYC.Application.CRM
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创 建：超级管理员
    /// 日 期：2017-07-11 14:20
    /// 描 述：现金余额
    /// </summary>
    public interface CrmCashBalanceIBLL
    {
        #region 获取数据
        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="queryJson">查询参数</param>
        /// <returns>返回列表</returns>
        IEnumerable<CrmCashBalanceEntity> GetList(string queryJson);
        #endregion
    }
}
