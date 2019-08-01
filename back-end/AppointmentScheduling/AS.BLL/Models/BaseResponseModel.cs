using System;
using System.ComponentModel.DataAnnotations;

namespace AS.BLL.Models
{
    public class BaseResponseModel
    {
        [Required]
        public String Code { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateModified { get; set; }
    }
}
