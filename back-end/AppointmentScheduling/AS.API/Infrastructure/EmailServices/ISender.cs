using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AS.API.Infrastructure.EmailServices
{
    public interface ISender
    {
        SendResponse Send(Email email, CancellationToken? token = null);
        Task<SendResponse> SendAsync(Email email, CancellationToken? token = null);
    }
}
