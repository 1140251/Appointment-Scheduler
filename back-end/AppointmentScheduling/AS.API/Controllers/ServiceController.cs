using AS.BLL.Models;
using AS.BLL.Services.Interfaces;
using AS.ErrorHandler;
using AS.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace AS.API.Controllers
{
    [Produces("application/json", "application/xml")]
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly IBaseService<Service> _service;
        private readonly IErrorHandler _errorHandler;

        public ServiceController(IBaseService<Service> service, IErrorHandler errorHandler)
        {
            _service = service;
            _errorHandler = errorHandler;
        }

        /// <summary>
        /// Create a Service.
        /// </summary>
        [HttpPost]
        public IActionResult Add([Required][FromBody] ServiceDTO service)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.ModelValidation), "", ModelState.Values.First().Errors.First().ErrorMessage));
            }
            Service receivedService = new Service(service.Name, service?.Description, service.Price, DAL.Common.UniversalState.Active);

            if (_service.Add(receivedService))
            {
                return StatusCode(201, new ServiceResponseDTO
                {
                    Code = receivedService.Code,
                    Name = receivedService.Name,
                    DateAdded = receivedService.CreatedOn,
                    DateModified = receivedService.ModifiedOn,
                    Description = receivedService.Description
                });
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Service", "Input data is invalid"));

        }



        /// <summary>
        /// Disable a Service.
        /// </summary>
        [HttpPut("{code}/disable")]
        public async Task<IActionResult> Disable([Required] string code)
        {
            Service service = await _service.GetByCode(code);
            if(service == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), "Service"));
            }
            service.Disable();
            if (await _service.Update(service))
            {
                return StatusCode(201, service);
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Service", "Input data is invalid"));

        }


        /// <summary>
        /// Get all Services.
        /// </summary>
        [HttpGet]
        public async Task<IEnumerable<Service>> GetAllService()
        {
            return await _service.GetAsync();
        }
    }
}
