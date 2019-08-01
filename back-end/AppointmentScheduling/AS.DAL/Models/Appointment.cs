using AS.DAL.Common;
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

        public Appointment(string title, string description, DateTime start, String duration, Service service, Room room, Employee employee, Customer customer)
        {
            Title = title;
            Description = description;
            Start = start;
            TimeZoneInfo tz = TimeZoneInfo.Local;
            DateTime end = start;
            End = end.Add(Utils.ParseDuration(duration));
            Service = service;
            Room = room;
            Employee = employee;
            Customer = customer;
        }


    }
}
