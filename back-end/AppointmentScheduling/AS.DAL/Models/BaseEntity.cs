using System;
using System.ComponentModel.DataAnnotations;

namespace AS.DAL.Models
{
    public class BaseEntity
    {
        protected BaseEntity()
        {
            Code = Guid.NewGuid().ToString();
        }

        [Key]
        public int Id { get; set; }

        public virtual string Code { get; protected set; }

        public virtual DateTime CreatedOn { get; protected set; }
        public virtual DateTime ModifiedOn { get; protected set; }

        public void SetModifiedDate()
        {
            this.ModifiedOn = DateTime.Now;
        }

        public void SetCreatedDate()
        {
            this.CreatedOn = DateTime.Now;
        }

    }
}
