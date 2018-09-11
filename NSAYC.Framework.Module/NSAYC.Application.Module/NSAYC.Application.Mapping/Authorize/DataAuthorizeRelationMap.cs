using NSAYC.Application.Base.AuthorizeModule;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创 建：爱养车框架开发组
    /// 日 期：2017-06-21 16:30
    /// 描 述：数据权限
    /// </summary>
    public class LR_Base_DataAuthorizeRelationMap : EntityTypeConfiguration<DataAuthorizeRelationEntity>
    {
        public LR_Base_DataAuthorizeRelationMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_BASE_DATARELATION");
            //主键
            this.HasKey(t => t.F_Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}

