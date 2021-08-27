using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.InterFace;
using WebAPI.Model;
using System.Linq;
using WebAPI.Dtos;
using System;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly IUnitOfWork uow;

        public CityController(IUnitOfWork uow)
        {
        
            this.uow = uow;
        }

        [HttpGet]
        public async Task<IActionResult> GetTModels()
        {
            var cities= await uow.CityRepository.getCities();
           
            var citiesDto=cities.Select(x=> new CityDto(){cityId=x.CityId,Name=x.Name});

            return Ok(citiesDto);
        }



         [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            City city = new City{
                CityId=cityDto.cityId,
                Name=cityDto.Name,
                LastUpdateBy=1,
                LastUpdatedOn=DateTime.Now
            };
            
            this.uow.CityRepository.AddCity(city);
           await this.uow.SaveAsync();
            return Ok(201);

        }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteCiyt(int  id)
        {
          this.uow.CityRepository.DeleteCiyt(id);
           await this.uow.SaveAsync();
            return Ok(id);

        }



    }
}