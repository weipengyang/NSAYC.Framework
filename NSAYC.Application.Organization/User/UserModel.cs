namespace NSAYC.Application.Organization
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2018.03.27
    /// 描 述：人员数据模型
    /// </summary>
    public class UserModel
    {
        /// <summary>
        /// 公司主键
        /// </summary>
        public string companyId { get; set; }
        /// <summary>
        /// 部门主键
        /// </summary>
        public string departmentId { get; set; }
        /// <summary>
        /// 员工名称
        /// </summary>
        public string name{ get; set; }
    }
}
