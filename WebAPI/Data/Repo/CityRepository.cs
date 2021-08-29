using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using WebAPI.InterFace;
using WebAPI.Model;

namespace WebAPI.Data.Repo
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContex dc;

        public CityRepository(DataContex dc)
        {
            this.dc = dc;
        }
        public void AddCity(City city)
        {
            this.dc.Cities.AddAsync(city);
        }

        public void DeleteCiyt(int cityId)
        {
           var city=this.dc.Cities.Find(cityId);
           this.dc.Cities.Remove(city);
        }

        public async Task<IEnumerable<City>> getCities()
        {
           return await this.dc.Cities.ToListAsync();
        }
        public async Task<City> FindCity(int id){
            return await this.dc.Cities.FindAsync(id);
        }
      
    }
}