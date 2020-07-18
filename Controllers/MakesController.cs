using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyVegaApp.Controllers.Resources;
using MyVegaApp.Core;
using MyVegaApp.Core.Models;

namespace MyVegaApp.Controllers {
    public class MakesController : Controller {
        private readonly VegaDbContext context;

        public MakesController (VegaDbContext context) {
            this.context = context;
        }

        [HttpGet ("/api/makes")]
        public IEnumerable<Make> GetMakes (MyV) {
            this.context = context;
            return await context.Makes.Include (m => m.Models).ToListAsync ();
        }

    }
}