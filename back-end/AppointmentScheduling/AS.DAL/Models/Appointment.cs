using System;
using System.Collections.Generic;

namespace AS.DAL.Models
{
    public class Appointment : BaseEntity
    {

        public string Title { get; set; }
        public string  Description { get; set; }
        public DateTime Start {get; set; }
        public DateTime End { get; set; }
        public Service Service { get; set; }
        public Customer Customer { get; set; }
        public Room Room { get; set; }
        public Employee Employee { get; set; }

        private Appointment() { }

        public Appointment(string title, string description, DateTime start, DateTime end, Service service, Room room, Employee employee, Customer customer)
        {
            Title = title;
            Description = description;
            Start = start;
            End = end;
            Service = service;
            Room = room;
            Employee = employee;
        }


    }
}
