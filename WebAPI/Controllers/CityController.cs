using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
//using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContex dc;
        public CityController(DataContex dc)
        {
            this.dc = dc;
        }

        [HttpGet]
        public async Task<IActionResult> GetTModels()
        {
            var cities= await this.dc.Cities.ToListAsync();
            return Ok(cities);
        }



    }
}