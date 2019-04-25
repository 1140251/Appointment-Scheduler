using System.Collections.Generic;

namespace AS.DAL.Models
{
    public class Room : BaseEntity
    {

        public string Name { get; private set; } = string.Empty;

        public string Description { get; private set; }

        public ICollection<Appointment> Appointments { get; set; }

        private Room() { }

        public Room(string name, string description = null)
        {
            Name = name;
            Description = description;
        }
    }
}
