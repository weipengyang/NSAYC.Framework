
namespace NSAYC.Application.Base.SystemModule
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.04
    /// 描 述：数据库表字段模型
    /// </summary>
    public class DatabaseTableFieldModel
    {
        /// <summary>
        /// 序号
        /// </summary>
        public int? f_number { get; set; }
        /// <summary>
        /// 字段名称
        /// </summary>
        public string f_column { get; set; }
        /// <summary>
        /// 数据类型
        /// </summary>
        public string f_datatype { get; set; }
        /// <summary>
        /// 数据长度
        /// </summary>
        public int? f_length { get; set; }
        /// <summary>
        /// 允许空
        /// </summary>
        public string f_isnullable { get; set; }
        /// <summary>
        /// 标识
        /// </summary>
        public string f_identity { get; set; }
        /// <summary>
        /// 主键
        /// </summary>
        public string f_key { get; set; }
        /// <summary>
        /// 默认值
        /// </summary>
        public string f_defaults { get; set; }
        /// <summary>
        /// 说明
        /// </summary>
        public string f_remark { get; set; }
    }
}
