using AutoMapper;
using WebAPI.Dtos;
using WebAPI.Model;

namespace WebAPI.Helper
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City,CityDto>().ReverseMap();
            CreateMap<City,CityUpdateDto>().ReverseMap();
        }
    }
}