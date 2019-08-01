using AS.DAL.Common;

namespace AS.DAL.Models
{
    public class Employee : User
    {  
        public Employee(string name, string contact, string email,string password) : base(name,contact, email)
        {
        }
        
    }
}
