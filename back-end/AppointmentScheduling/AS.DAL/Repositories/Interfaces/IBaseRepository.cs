using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System;
using AS.DAL.Models;

namespace AS.DAL.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        Task<IEnumerable<T>> GetAll(string includeProperties);
        Task<T> GetById(int id);
        Task<T> GetByCode(string code);
        IEnumerable<T> Where(Expression<Func<T, bool>> exp);
        bool Insert(T entity);
        Task<bool> Update(T entity);
        bool Delete(T entity);
        bool AddCollection(IEnumerable<T> entity);
    }
}
