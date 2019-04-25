using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AS.DAL.Repositories.Interfaces;
using AS.DAL.Models;
using AS.DAL.Contexts;
using AS.ErrorHandler;
using AS.DAL.Common;

namespace AS.DAL.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private readonly AppointmentDatabaseContext _context;

        private readonly DbSet<T> _entities;

        private readonly IErrorHandler _errorHandler;

        public BaseRepository(AppointmentDatabaseContext context, IErrorHandler errorHandler)
        {
            _context = context;
            _entities = context.Set<T>();
            _errorHandler = errorHandler;
        }
        public async Task<IEnumerable<T>> GetAll(string includeProperties = null)
        {
            IQueryable<T> query = _entities;
            if (!String.IsNullOrEmpty(includeProperties))
            {
                query.Include(includeProperties);
            }
            return await query.ToListAsync();
        }
        public async Task<T> GetById(int id)
        {
            return await _entities.SingleOrDefaultAsync(s => s.Id == id);
        }

        public async Task<T> GetByCode(string code)
        {
            return await _entities.SingleOrDefaultAsync(s => s.Code == code);
        }

        public IEnumerable<T> Where(Expression<Func<T, bool>> exp)
        {
            return _entities.Where(exp);
        }
        public bool Insert(T entity)
        {
            if (entity == null) throw new ArgumentNullException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNull), entity.GetType().Name));
            entity.SetCreatedDate();
            entity.SetModifiedDate();
            var createdEntity = _entities.Add(entity);
            return (_context.SaveChanges() >= 0);
        }
        public async Task<bool> Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNull), entity.GetType().Name));

            T oldEntity = await _context.FindAsync<T>(entity.Id);
            T updatedEntity = Utils.CheckUpdateObject(oldEntity, entity);
            updatedEntity.SetModifiedDate();
            _context.Entry(oldEntity).CurrentValues.SetValues(updatedEntity);
            return (_context.SaveChanges() >= 0);
        }
        public bool Delete(T entity)
        {
            if (entity == null) throw new ArgumentNullException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNull), entity.GetType().Name));

            _entities.Remove(entity);
            return (_context.SaveChanges() >= 0);
        }

        public bool AddCollection(IEnumerable<T> entity)
        {
            if (entity == null) throw new ArgumentNullException(string.Format(_errorHandler.GetMessage(ErrorMessagesEnum.EntityNull), entity.GetType().Name));
            _entities.AddRange(entity);
            return (_context.SaveChanges() >= 0);
        }

    }
}
