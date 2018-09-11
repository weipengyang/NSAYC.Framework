using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.OrganizationModule
{
    public class OrganizationModuleAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "OrganizationModule";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "OrganizationModule_default",
                "OrganizationModule/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}