using AS.BLL.Services.Interfaces;
using AS.DAL.Models;
using AS.DAL.Repositories;
using AS.DAL.Repositories.Interfaces;
using AS.ErrorHandler;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Net.Http;
using System.Threading.Tasks;

namespace AS.BLL.Services
{
    public class BaseService<T> : IBaseService<T> where T : BaseEntity
    {
        private readonly IBaseRepository<T> _repository;
        private readonly IErrorHandler _errorHandler;

        public BaseService(IBaseRepository<T> repository, IErrorHandler errorHandler)
        {
            _repository = repository;
            _errorHandler = errorHandler;
        }

        public async Task<IEnumerable<T>> GetAsync(string includeProperties)
        {
            return await _repository.GetAll(includeProperties);
        }

        public async Task<T> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<T> GetByCode(string code)
        {
            return await _repository.GetByCode(code);
        }

        public IEnumerable<T> Where(Expression<Func<T, bool>> exp)
        {
            return _repository.Where(exp);
        }
        
        public  bool Add(T entry)
        {
            return _repository.Insert(entry);
        }

        public bool Remove(string code)
        {
            var label = _repository.GetByCode(code).Result;
            return _repository.Delete(label);
        }

        public async Task<bool> Update(T entry)
        {
            var targetRecord = await _repository.GetByCode(entry.Code);
            var exists = targetRecord != null;
            if (exists)
            {
                entry.Id = targetRecord.Id;
                return await _repository.Update(entry);
            }
            else { 
                throw new HttpRequestException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNotFound), entry.GetType().Name));
            }
        }


        public async Task<bool> AddOrUpdate(string code, T entry)
        {
            var targetRecord = await _repository.GetByCode(code);
            var exists = targetRecord != null;
            if (exists)
            {
                entry.Id = targetRecord.Id;
                return await _repository.Update(entry);
            }
            return _repository.Insert(entry);
        }
    }
}
