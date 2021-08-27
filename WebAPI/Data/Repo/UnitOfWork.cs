using System.Threading.Tasks;
using WebAPI.InterFace;
using WebAPI.Model;

namespace WebAPI.Data.Repo
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContex dc;

        public UnitOfWork(DataContex dc)
        {
            this.dc = dc;
        }
        public ICityRepository CityRepository => 
           new CityRepository(dc);

        public async Task<bool> SaveAsync()
        {
          return  await dc.SaveChangesAsync()>0;
        }
    }
}