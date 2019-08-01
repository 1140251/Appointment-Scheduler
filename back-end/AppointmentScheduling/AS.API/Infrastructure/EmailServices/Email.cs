using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AS.API.Infrastructure.EmailServices
{
    public class Email
    {
        public List<String> ToAddresses { get; set; }
        public string Subject { get; internal set; }
        public bool IsHtml { get; internal set; } = false;
        public string Body { get; internal set; }
    }
}
