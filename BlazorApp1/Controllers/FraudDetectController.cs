using FraudDetect.Models;
using Microsoft.AspNetCore.Mvc;

namespace FraudDetect.Controllers
{
    [Route("/card/submit")]
    public class FraudDetectController : Controller
    {
        [HttpPost]
        public IActionResult SubmitCard([FromForm] CardViewModel model)
        {
            return View();
        }
    }
}
