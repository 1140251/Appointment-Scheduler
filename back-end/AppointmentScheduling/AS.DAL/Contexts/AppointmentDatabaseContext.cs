using AS.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace AS.DAL.Contexts
{
    public class AppointmentDatabaseContext : DbContext
    {
        public AppointmentDatabaseContext(DbContextOptions<AppointmentDatabaseContext> options) : base(options) { }


        public virtual DbSet<Appointment> Appointments { get; set; }

        public virtual DbSet<Service> Services { get; set; }

        public virtual DbSet<Customer> Customers { get; set; }

        public virtual DbSet<Room> Rooms { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Room>()
                .HasIndex(u => u.Name)
                .IsUnique();          
            builder.Entity<Service>() 
                .HasIndex(u => u.Name)
                .IsUnique();

            builder.Entity<Customer>(entity => {
                entity.HasIndex(e => e.Name).IsUnique();
                entity.HasIndex(e => e.Email).IsUnique();
                entity.HasIndex(e => e.Contact).IsUnique();
            });

            builder.Entity<Employee>(entity => {
                entity.HasIndex(e => e.Name).IsUnique();
                entity.HasIndex(e => e.Email).IsUnique();
                entity.HasIndex(e => e.Contact).IsUnique();
            });
        }


    }
}
