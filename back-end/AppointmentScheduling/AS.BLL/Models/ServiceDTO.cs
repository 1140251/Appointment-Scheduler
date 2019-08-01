using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using AS.DAL.Common;

namespace AS.BLL.Models
{
    public class ServiceDTO
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public double Price { get; set; }
    }

    public class ServiceResponseDTO : BaseResponseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public UniversalState UniversalState { get; set; }
    }
}
