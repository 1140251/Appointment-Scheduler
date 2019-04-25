using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AS.BLL.Models
{
    public class RoomDTO
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class RoomResponseDTO : BaseResponseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
