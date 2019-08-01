using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AS.API.Infrastructure.EmailServices
{
    public class SendResponse
    {
        public List<string> ErrorMessages { get; set; }
        public bool Successful => !ErrorMessages.Any();

        public SendResponse()
        {
            ErrorMessages = new List<string>();
        }
    }

    public class SendResponse<T> : SendResponse
    {
        public T Data { get; set; }
    }
}
