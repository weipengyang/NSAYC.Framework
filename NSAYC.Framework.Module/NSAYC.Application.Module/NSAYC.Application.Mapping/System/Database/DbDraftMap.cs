using NSAYC.Application.Base.SystemModule;
using System.Data.Entity.ModelConfiguration;

namespace NSAYC.Application.Mapping.LR_System.Database
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创 建：超级管理员
    /// 日 期：2017-12-19 12:03
    /// 描 述：数据库建表草稿类
    /// </summary>
    public class DbDraftMap : EntityTypeConfiguration<DbDraftEntity>
    {
        public DbDraftMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_BASE_DBDRAFT");
            //主键
            this.HasKey(t => t.F_Id);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}
