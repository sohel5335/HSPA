using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.InterFace;
using WebAPI.Model;
using System.Linq;
using WebAPI.Dtos;
using System;
using AutoMapper;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, IMapper mapper)
        {
            this.mapper = mapper;

            this.uow = uow;
        }

        [HttpGet]
        public async Task<IActionResult> GetTModels()
        {
            var cities = await uow.CityRepository.getCities();
             var citiesDto=mapper.Map<IEnumerable<CityDto>>(cities) ;
            return Ok(citiesDto);
        }



        [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            this.uow.CityRepository.AddCity(city);
            await this.uow.SaveAsync();
            return Ok(201);

        }

        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateCity(int id,CityDto cityDto)
        {
           var cityFromDb= await uow.CityRepository.FindCity(id);
           if(cityFromDb==null)
                return BadRequest("Id Not Match");
           cityFromDb.LastUpdateBy=1;
           cityFromDb.LastUpdatedOn=DateTime.Now;
           mapper.Map(cityDto,cityFromDb);
           await uow.SaveAsync();
            return StatusCode(200);

        }
        [HttpPut("UpdateCityName/{id}")]
        public async Task<IActionResult> UpdateCityName(int id,CityUpdateDto cityUpdateDto)
        {
           var cityFromDb= await uow.CityRepository.FindCity(id);
           cityFromDb.LastUpdateBy=1;
           cityFromDb.LastUpdatedOn=DateTime.Now;
           mapper.Map(cityUpdateDto,cityFromDb);
           await uow.SaveAsync();
            return StatusCode(200);

        }



        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCiyt(int id)
        {
            this.uow.CityRepository.DeleteCiyt(id);
            await this.uow.SaveAsync();
            return Ok(id);

        }



    }
}