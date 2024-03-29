﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace AS.BLL.Models
{
    public class ErrorResponseModel
    {
        public int Code { get; set; }
        public string Message { get; set; }
        public string Exception { get; set; }

        // other fields

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
