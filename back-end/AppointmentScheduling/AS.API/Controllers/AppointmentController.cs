using AS.BLL.Models;
using AS.BLL.Services.Interfaces;
using AS.DAL.Models;
using AS.ErrorHandler;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Threading.Tasks;

namespace AS.API.Controllers
{
    [Produces("application/json", "application/xml")]
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IBaseService<Appointment> _service;
        private readonly IBaseService<Customer> _serviceCustomer;
        private readonly IBaseService<Employee> _serviceEmployee;
        private readonly IBaseService<Room> _serviceRoom;
        private readonly IBaseService<Service> _serviceService;
        private readonly IErrorHandler _errorHandler;

        public AppointmentController(IBaseService<Appointment> service, IErrorHandler errorHandler)
        {
            _service = service;
            _errorHandler = errorHandler;
        }

        /// <summary>
        /// Create a new Appointment.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]AppointmentDTO entity)
        {

            Customer customer = await _serviceCustomer.GetByCode(entity.Customer);
            if (customer == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), "Customer"));
            }
            Employee employee = await _serviceEmployee.GetByCode(entity.Employee);
            if (employee == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), "Employee"));
            }
            Room room = await _serviceRoom.GetByCode(entity.Room);
            if (room == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), "Room"));
            }
            Service service = await _serviceService.GetByCode(entity.Service);
            if (service == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), "Service"));
            }

            Appointment appointment = new Appointment(entity.Title,entity.Description,entity.Start,entity.End,service,room,employee,customer);

            if (_service.Add(appointment))
            {
                return StatusCode(201, entity);
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Appointment", "Input data is invalid"));

        }

        /// <summary>
        /// Update an Appointment.
        /// </summary>
        [HttpPut("{code}")]
        public IActionResult Update([Required]string code,[FromBody]AppointmentDTO entity)
        {



            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Appointment", "Input data is invalid"));

        }

        /// <summary>
        /// Delete an Appointment.
        /// </summary>
        [HttpDelete("{code}")]
        public IActionResult Delete([Required]string code)
        {
            if (_service.Remove(code))
            {
                return Ok();
            }

            return NotFound();
        }



    }
}
