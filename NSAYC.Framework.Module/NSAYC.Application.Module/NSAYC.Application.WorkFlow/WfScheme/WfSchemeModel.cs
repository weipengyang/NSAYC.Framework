using System.Collections.Generic;

namespace NSAYC.Application.WorkFlow
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：工作流模板模型
    /// </summary>
    public class WfSchemeModel
    {
        #region 原始属性
        /// <summary>
        /// 节点数据
        /// </summary>
        public List<WfNodeInfo> nodes { get; set; }
        /// <summary>
        /// 线条数据
        /// </summary>
        public List<WfLineInfo> lines { get; set; }
        #endregion
    }
}
