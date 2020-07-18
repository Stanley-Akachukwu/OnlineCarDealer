using System.Collections.Generic;
using MyVegaApp.Core.Models;

namespace MyVegaApp.Controllers.Resources {
    public class MakeResource {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Model> Models { get; set; }

    }
}