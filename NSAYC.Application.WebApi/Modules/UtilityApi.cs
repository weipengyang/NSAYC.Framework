using Nancy;

namespace NSAYC.Application.WebApi.Modules
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.05.12
    /// 描 述：通用功能
    /// </summary>
    public class UtilityApi : BaseApi
    {
        /// <summary>
        /// 注册接口
        /// </summary>
        public UtilityApi()
            : base("/learun/adms")
        {
            Get["/heart"] = Heart;
        }

        /// <summary>
        /// 登录接口
        /// </summary>
        /// <param name="_"></param>
        /// <returns></returns>
        private Response Heart(dynamic _)
        {
            return Success("成功");
        }
    }
}