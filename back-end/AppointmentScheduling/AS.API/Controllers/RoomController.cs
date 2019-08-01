using AS.BLL.Services;
using AS.ErrorHandler;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net.Http;
using AS.BLL.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AS.BLL.Services.Interfaces;
using AS.DAL.Models;

namespace AS.API.Controllers
{
    [Produces("application/json", "application/xml")]
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IBaseService<Room> _service;
        private readonly IErrorHandler _errorHandler;

        public RoomController(IBaseService<Room> service, IErrorHandler errorHandler)
        {
            _service = service;
            _errorHandler = errorHandler;
        }

        /// <summary>
        /// Create a Room.
        /// </summary>
        [HttpPost]
        public IActionResult Add([Required][FromBody] RoomDTO room)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.ModelValidation), "", ModelState.Values.First().Errors.First().ErrorMessage));
            }
            Room receivedRoom = new Room(room.Name, room?.Description);

            if (_service.Add(receivedRoom))
            {
                return StatusCode(201, new RoomResponseDTO
                {
                    Code = receivedRoom.Code,
                    Name = receivedRoom.Name,
                    DateAdded = receivedRoom.CreatedOn,
                    DateModified = receivedRoom.ModifiedOn,
                    Description = receivedRoom.Description
                });
            }
            throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotCreated), "Room", "Input data is invalid"));

        }

        /// <summary>
        /// Get all Rooms.
        /// </summary>
        [HttpGet]
        public async Task<IEnumerable<RoomResponseDTO>> GetAllRooms()
        {
            IEnumerable<Room> rooms = await _service.GetAsync();
            return rooms.Select(x => new RoomResponseDTO
            {
                Code = x.Code,
                Name = x.Name,
                Description = x.Description,
                DateAdded = x.CreatedOn,
                DateModified = x.ModifiedOn
            });

        }

    }
}
