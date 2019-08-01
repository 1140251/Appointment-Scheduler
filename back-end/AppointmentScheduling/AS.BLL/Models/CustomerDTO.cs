using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AS.BLL.Models
{
    public class CustomerDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Contact { get; set; }

        [Required]
        public string Email { get; set; }
        

    }
    public class CustomerResponseDTO : BaseResponseModel
     {
        public string Name { get; set; }

        public string Contact { get; set; }

        public string Email { get; set; }

        public int CompletedAppointments { get; set; }

    }

}
