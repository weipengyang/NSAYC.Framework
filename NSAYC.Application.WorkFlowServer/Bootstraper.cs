using Nancy;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;

namespace NSAYC.Application.WorkFlowServer
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.05.12
    /// 描 述：Nancy-初始化
    /// </summary>
    public class Bootstraper : DefaultNancyBootstrapper
    {
        /// <summary>
        /// 自定义请求启动函数
        /// </summary>
        /// <param name="container"></param>
        /// <param name="pipelines"></param>
        /// <param name="context"></param>
        protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context)
        {
            //CORS Enable
            pipelines.AfterRequest.AddItemToEndOfPipeline((ctx) =>
            {
                var originlist = ctx.Request.Headers["Origin"];
                foreach (var origin in originlist)
                {
                    ctx.Response.WithHeader("Access-Control-Allow-Origin", origin);
                }
                ctx.Response.WithHeader("Access-Control-Allow-Methods", "POST,GET")
                    .WithHeader("Access-Control-Allow-Credentials", "true")
                    .WithHeader("Access-Control-Allow-Headers", "Accept, Origin, Content-type");
            });
        }
    }
}
