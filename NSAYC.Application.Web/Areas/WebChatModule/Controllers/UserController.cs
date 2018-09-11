using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NSAYC.Application.Web.Areas.WebChatModule.Controllers
{
    public class UserController : Controller
    {
        // GET: WebChatModule/User
        public ActionResult Index()
        {
            return View();
        }
    }
}