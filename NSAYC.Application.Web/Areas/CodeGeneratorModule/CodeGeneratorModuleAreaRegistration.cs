using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.CodeGeneratorModule
{
    public class CodeGeneratorModuleAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "CodeGeneratorModule";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "CodeGeneratorModule_default",
                "CodeGeneratorModule/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}