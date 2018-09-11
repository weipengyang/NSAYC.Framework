﻿namespace NSAYC.Application.Base.SystemModule
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2018.03.27
    /// 描 述：数据字典数据模型
    /// </summary>
    public class DataItemModel
    {
        /// <summary>
        /// 上级ID
        /// </summary>
        public string parentId { get; set; }
        /// <summary>
        /// 显示名称
        /// </summary>
        public string text { get; set; }
        /// <summary>
        /// 值
        /// </summary>
        public string value { get; set; }
    }
}
