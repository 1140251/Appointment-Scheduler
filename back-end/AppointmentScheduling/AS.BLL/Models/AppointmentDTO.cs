using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AS.BLL.Models
{
    public class AppointmentDTO
    {
        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
        [Required]
        public DateTime Start { get; set; }

        [Required]
        public string Duration { get; set; }

        [Required]
        public String Service { get; set; }
        [Required]
        public String Customer { get; set; }
        [Required]
        public String Room { get; set; }
        [Required]
        public String Employee { get; set; }
    }

    public class AppointmentResponseDTO : BaseResponseModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public String Service { get; set; }
        public String Customer { get; set; }
        public String Room { get; set; }
        public String Employee { get; set; }
    }
}
