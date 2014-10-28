using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JsUnitTestingDotNetNotts.Startup))]
namespace JsUnitTestingDotNetNotts
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
