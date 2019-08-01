using AS.DAL.Common;
using System.Collections.Generic;

namespace AS.DAL.Models
{
    public class Service : BaseEntity
    {
        public string Name { get; private set; }

        public string Description { get; private set; }

        public UniversalState UniversalState { get; private set; }

        public double Price { get; private set; }

        public ICollection<Appointment> Appointments { get; set; }


        private Service() { }

        public Service(string name, string description, double price, UniversalState universalState)
        {
            Name = name;
            Description = description;
            Price = price;
            UniversalState = universalState;
        }

        public void Disable()
        {
            this.UniversalState = UniversalState.Disabled;
        }


    }
}
