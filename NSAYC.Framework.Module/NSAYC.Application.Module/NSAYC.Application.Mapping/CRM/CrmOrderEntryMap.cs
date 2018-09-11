using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创 建：超级管理员
    /// 日 期：2017-07-10 17:59
    /// 描 述：订单管理
    /// </summary>
    public class LR_CRM_OrderEntryMap : EntityTypeConfiguration<CrmOrderProductEntity>
    {
        public LR_CRM_OrderEntryMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_CRM_ORDERPRODUCT");
            //主键
            this.HasKey(t => t.F_OrderEntryId);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

