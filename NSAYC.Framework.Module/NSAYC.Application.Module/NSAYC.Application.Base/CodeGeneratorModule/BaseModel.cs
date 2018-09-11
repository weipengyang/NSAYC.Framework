
namespace NSAYC.Application.BaseModule.CodeGeneratorModule
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：基础设置
    /// </summary>
    public class BaseModel
    {
        /// <summary>
        /// 创建人员
        /// </summary>
        public string createUser { get; set; }
        /// <summary>
        /// 功能名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 功能描述
        /// </summary>
        public string describe { get; set; }
        /// <summary>
        /// 输出区域
        /// </summary>
        public string outputArea { get; set; }
        /// <summary>
        /// 映射类输出目录
        /// </summary>
        public string mappingDirectory { get; set; }
        /// <summary>
        /// 后端类输出目录
        /// </summary>
        public string serviceDirectory { get; set; }
        /// <summary>
        /// 前端项输出目录
        /// </summary>
        public string webDirectory { get; set; }
    }
}
