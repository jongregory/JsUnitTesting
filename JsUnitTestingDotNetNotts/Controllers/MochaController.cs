using System.Web.Mvc;

#if DEBUG
namespace JsUnitTestingDotNetNotts.Controllers
{
    public class MochaController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }       
    }
}
#endif
