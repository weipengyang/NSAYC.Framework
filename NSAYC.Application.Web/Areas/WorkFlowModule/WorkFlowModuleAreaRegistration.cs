using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.WorkFlowModule
{
    public class WorkFlowModuleAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "WorkFlowModule";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "WorkFlowModule_default",
                "WorkFlowModule/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}