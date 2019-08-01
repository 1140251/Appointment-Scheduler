using AS.BLL.Models;
using AS.BLL.Services.Interfaces;
using AS.DAL.Models;
using AS.ErrorHandler;
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
    public class CustomerController : ControllerBase
    {
        private readonly IBaseService<Customer> _service;
        private readonly IErrorHandler _errorHandler;

        public CustomerController(IBaseService<Customer> service, IErrorHandler errorHandler)
        {
            _service = service;
            _errorHandler = errorHandler;
        }


        /// <summary>
        /// Create a new Customer.
        /// </summary>
        [HttpPost]
        public IActionResult Post([FromBody]CustomerDTO entity)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.ModelValidation), "", ModelState.Values.First().Errors.First().ErrorMessage));
            }
            Customer customer = new Customer(entity.Name, entity.Contact, entity.Email);
            if (_service.Add(customer))
            {
                return StatusCode(201, entity);
            }

            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Customer", "Input data is invalid"));
        }

        /// <summary>
        /// Get all Customers.
        /// </summary>
        [HttpGet]
        public async Task<IEnumerable<CustomerResponseDTO>> GetAllCustomers()
        {

            IEnumerable<Customer> customers = await _service.GetAsync(includeProperties: "Appointments");
            foreach (var item in customers)
            {
                item.Decrypt();
            }
            return customers.Select(x =>  new CustomerResponseDTO
            {
                Code = x.Code,
                Name = x.Name,
                Contact = x.Contact,
                Email = x.Email,
                CompletedAppointments = x.Appointments!= null ? x.Appointments.Where(d => d.End < DateTime.Now).Count() : 0 ,
                DateAdded = x.CreatedOn,
                DateModified = x.ModifiedOn
            });
        }

        /// <summary>
        /// Update Customer.
        /// </summary>
        [HttpPut("{code}")]
        public async Task<IActionResult> UpdateCustomer([Required] string code, [FromBody]CustomerDTO entity)
        {
            Customer customer = new Customer(entity.Name, entity.Contact, entity.Email);
            customer.SetCode(code);
            if (await _service.Update(customer))
            {
                return StatusCode(200, customer);
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Customer", "Input data is invalid"));

        }
    }
}
