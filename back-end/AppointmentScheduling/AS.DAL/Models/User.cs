using AS.DAL.Common;
using System.Collections.Generic;

namespace AS.DAL.Models
{
    public abstract class User : BaseEntity
    {
        protected User() { }

        public User(string name, string contact, string email)
        {
            Name = name;
            Contact = Cypher.Encrypt(contact);
            Email = Cypher.Encrypt(email);
        }

        public string Name { get; private set; } = string.Empty;

        public string Contact { get; private set; }
        public string Email { get; private set; }

        public void Decrypt()
        {
            this.Contact = Cypher.Decrypt(this.Contact);
            this.Email = Cypher.Decrypt(this.Email);

        }

        public ICollection<Appointment> Appointments { get; set; }
    }
}
