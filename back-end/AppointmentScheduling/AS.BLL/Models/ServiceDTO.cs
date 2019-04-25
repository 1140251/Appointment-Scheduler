using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AS.BLL.Models
{
    public class ServiceDTO
    {
        [Required]
        public string Name { get; private set; }
        [Required]
        public string Description { get; private set; }
        [Required]
        public double Price { get; private set; }
    }

    public class ServiceResponseDTO : BaseResponseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
    }
}
