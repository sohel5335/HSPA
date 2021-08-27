using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Model;

namespace WebAPI.InterFace
{
    public interface ICityRepository
    {
         Task<IEnumerable<City>> getCities();
         void AddCity(City city);
         void DeleteCiyt(int cityId);
        
       
    }
}