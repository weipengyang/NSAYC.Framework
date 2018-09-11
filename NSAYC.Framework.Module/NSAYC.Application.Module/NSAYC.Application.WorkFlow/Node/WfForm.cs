namespace NSAYC.Application.WorkFlow
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.08.03
    /// 描 述：工作流关联表单
    /// </summary>
    public class WfForm
    {
        /// <summary>
        /// 主键
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// 自定义表单主键
        /// </summary>
        public string formId { get; set; }
        /// <summary>
        /// 表单名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 表单地址
        /// </summary>
        public string url { get; set; }
        /// <summary>
        /// 自定义表单关联的字段
        /// </summary>
        public string field { get; set; }
    }
}
