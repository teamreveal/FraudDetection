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
            var userAgent = Request.Headers["User-Agent"].ToString();
            if (string.IsNullOrEmpty(userAgent) || userAgent.Contains("Playwright"))
            {
                return BadRequest("Bot requests are not allowed");
            }

            return RedirectToPage("/card");
        }
    }
}
