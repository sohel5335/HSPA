
using Microsoft.EntityFrameworkCore;
using WebAPI.Model;

namespace WebAPI.Data
{
    public class DataContex:DbContext
    {
        public DataContex(DbContextOptions<DataContex>options ):base(options)
        {

        }
        
        public DbSet<City> Cities { get; set; }
       
    }
}