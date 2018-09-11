using NSAYC.Application.Base.SystemModule;
using NSAYC.Util;
using Nancy;

namespace NSAYC.Application.WebApi.Modules
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2018.01.04
    /// 描 述：数据字典
    /// </summary>
    public class DataItemApi: BaseApi
    {
        /// <summary>
        /// 注册接口
        /// </summary>
        public DataItemApi()
            : base("/learun/adms/dataitem")
        {
            Get["/details"] = GetDetailList;// 获取数据字典详细列表

            Get["/map"] = GetMap;// 获取映射数据
        }
        private DataItemIBLL dataItemIBLL = new DataItemBLL();

        /// <summary>
        /// 获取数据字典详细列表
        /// </summary>
        /// <param name="_"></param>
        /// <returns></returns>
        private Response GetDetailList(dynamic _)
        {
            string req = this.GetReqData();// 获取模板请求数据
            var data = dataItemIBLL.GetDetailList(req, "");
            return Success(data);
        }

        /// <summary>
        /// 获取部门映射表
        /// </summary>
        /// <param name="_"></param>
        /// <returns></returns>
        public Response GetMap(dynamic _)
        {
            string ver = this.GetReqData();// 获取模板请求数据
            var data = dataItemIBLL.GetModelMap();
            string md5 = Md5Helper.Encrypt(data.ToJson(), 32);
            if (md5 == ver)
            {
                return Success("no update");
            }
            else
            {
                var jsondata = new
                {
                    data = data,
                    ver = md5
                };
                return Success(jsondata);
            }
        }

    }
}