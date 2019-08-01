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
    public class AppointmentController : ControllerBase
    {
        private readonly IBaseService<Appointment> _service;
        private readonly IBaseService<Customer> _serviceCustomer;
        private readonly IBaseService<Employee> _serviceEmployee;
        private readonly IBaseService<Room> _serviceRoom;
        private readonly IBaseService<Service> _serviceService;
        private readonly IErrorHandler _errorHandler;

        public AppointmentController(IBaseService<Appointment> service, IBaseService<Customer> serviceCustomer, 
            IBaseService<Room> serviceRoom, IBaseService<Employee> serviceEmployee, IBaseService<Service> serviceService, IErrorHandler errorHandler)
        {
            _service = service;
            _serviceCustomer = serviceCustomer;
            _serviceEmployee = serviceEmployee;
            _serviceRoom = serviceRoom;
            _serviceService = serviceService;
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
            Appointment appointment = null;
            if (CheckAvailabilityRoom())
            {
                appointment = new Appointment(entity.Title,entity.Description,entity.Start,entity.Duration,service,room,employee,customer);
            }
            if (appointment != null && _service.Add(appointment))
            {
                return StatusCode(201, entity);
            }
            if(appointment == null)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.RoomNotAvailable)));
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Appointment", "Input data is invalid"));

        }

        private Boolean CheckAvailabilityRoom()
        {
            return true;
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


        /// <summary>
        /// Get all Appointments.
        /// </summary>
        [HttpGet]
        public async Task<IEnumerable<AppointmentResponseDTO>> GetAllCustomers()
        {

            IEnumerable<Appointment> appointments = await _service.GetAsync("Room,Customer,Service,Employee");

            return appointments.Select(x => new AppointmentResponseDTO
            {
                Code = x.Code,
                Customer = x.Customer.Name,
                Title = x.Title,
                Description = x.Description,
                Employee = x.Employee.Name,
                Start = x.Start,
                End = x.End,
                Room = x.Room.Name,
                Service = x.Service.Name,
                DateAdded = x.CreatedOn, 
                DateModified = x.ModifiedOn
            });
        }


    }
}
