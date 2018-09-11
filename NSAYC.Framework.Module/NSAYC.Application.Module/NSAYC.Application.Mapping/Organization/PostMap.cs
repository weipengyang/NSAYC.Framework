using NSAYC.Application.Organization;
using System.Data.Entity.ModelConfiguration;

namespace NSAYC.Application.Mapping
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.04
    /// 描 述：岗位管理
    /// </summary>
    public class PostMap : EntityTypeConfiguration<PostEntity>
    {
        public PostMap()
        {
            #region 表、主键
            //表
            this.ToTable("LR_BASE_POST");
            //主键
            this.HasKey(t => t.F_PostId);
            #endregion

            #region 配置关系
            #endregion
        }
    }
}
