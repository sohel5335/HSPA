using System.Threading.Tasks;

namespace WebAPI.InterFace
{
    public interface IUnitOfWork
    {
         ICityRepository CityRepository {get;}
         Task<bool> SaveAsync();
    }
}