namespace NSAYC.Util
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.07
    /// 描 述：数据库参数
    /// </summary>
    public class FieldValueParam
    {
        /// <summary>
        /// 字段名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 数据值
        /// </summary>
        public object value { get; set; }
        /// <summary>
        /// 数据类型
        /// </summary>
        public int type { get; set; }
    }
}
