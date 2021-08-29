using System;

namespace WebAPI.Model
{
    public class City
    {
        public int CityId { get; set; }
         public string Name { get; set; }
         public string Country { get; set; }
         public DateTime LastUpdatedOn { get; set; }
        public int LastUpdateBy { get; set; }

    }
}
