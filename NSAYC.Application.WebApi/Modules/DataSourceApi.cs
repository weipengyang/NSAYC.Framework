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
    /// 描 述：数据源接口
    /// </summary>s
    public class DataSourceApi : BaseApi
    {
        /// <summary>
        /// 注册接口
        /// </summary>
        public DataSourceApi()
            : base("/learun/adms/datasource")
        {
            Get["/map"] = GetDataTable;// 获取数据表数据
        }
        DataSourceIBLL dataSourceIBLL = new DataSourceBLL();
        /// <summary>
        /// 获取数据表数据
        /// </summary>
        /// <param name="_"></param>
        /// <returns></returns>
        private Response GetDataTable(dynamic _)
        {
            reqModel req = this.GetReqData<reqModel>();// 获取模板请求数据
            var data = dataSourceIBLL.GetDataTable(req.code, "");

            string md5 = Md5Helper.Encrypt(data.ToJson(), 32);
            if (md5 == req.ver)
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

        private class reqModel {
            /// <summary>
            /// 编码
            /// </summary>
            public string code { get; set; }
            /// <summary>
            /// 版本
            /// </summary>
            public string ver { get; set; }
        }
    }
}