using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ML_poker.Controllers
{
    public class HomeController : Controller
    {
      [HttpGet("/")]
      public ActionResult Index()
      {
          return View();
      }
      [HttpGet("/playing-board")]
      public ActionResult PlayingBoard()
      {
          return View();
      }
      [HttpPost("/teach-machine")]
      public ActionResult Menu()
      {
        if(Request.Form["outcome"] == "win"){
          // AddHandWin();
        } else if(Request.Form["outcome"] == "lose"){
          // AddHandLose();
        }
          return RedirectToAction("Index");
      }
    }
}
