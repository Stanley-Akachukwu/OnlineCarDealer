using System.ComponentModel.DataAnnotations.Schema;

namespace MyVegaApp.Core.Models
{
    [Table ("Features")]
    public class Feature {
        public int Id { get; set; }
        public int VehicleId { get; set; }
        public int FeatureId { get; set; }
        public string Name { get; set; }
    }
}