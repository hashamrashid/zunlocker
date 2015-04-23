using System.Web;
using System.Web.Optimization;

namespace ZteUnlocker.Main
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/vendor/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/vendor/jquery/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/vendor/common/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/vendor/bootstrap/js/bootstrap.js",
                      "~/vendor/common/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/vendor/angularjs/angular-1.3.13.js",
                       "~/vendor/angularjs/angular-animate.js",
                      "~/vendor/duScroll/duScroll.js"));

            bundles.Add(new ScriptBundle("~/bundles/unlockerSite").Include(
                      "~/src/app/unlockerApp.js",
                      "~/src/app/unlockService.js"));

            bundles.Add(new ScriptBundle("~/bundles/zteSite").Include(
                    "~/src/js/zteSite.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/src/assets/sass/zUnlocker/site.css"));
        }
    }
}
