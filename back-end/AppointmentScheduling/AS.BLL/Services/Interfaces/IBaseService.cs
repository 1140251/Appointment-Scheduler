using AS.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AS.BLL.Services.Interfaces
{
    public interface IBaseService<T> 
    {
        Task<IEnumerable<T>> GetAsync(string includeProperties = null);

        Task<T> GetById(int id);

        Task<T> GetByCode(string code);

        IEnumerable<T> Where(Expression<Func<T, bool>> exp);

        bool Add(T entry);

        Task<bool> Update(T entry);

        bool Remove(string code);
    }
}
