using System.ComponentModel.DataAnnotations;

namespace WebAPI.Dtos
{
    public class CityDto
    {
        public int cityId { get; set; }

        [Required(ErrorMessage ="Name is Mendotory field")]
        [StringLength(50,MinimumLength =2)]
        [RegularExpression(".*[a-zA-Z]+.*",ErrorMessage ="Only Number is not allow")]
        public string Name { get; set; }
        [Required]
        public string Country { get; set; }
    }
}