namespace AS.DAL.Models
{
    public class Customer : User
    {
        private Customer() { }

        public Customer(string name, string contact, string email) : base(name,contact,email)
        {                  
        }
        
        public void SetCode(string code)
        {
            this.Code = code;
        }

    }
}
