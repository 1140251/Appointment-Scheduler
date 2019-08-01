using AS.API.Infrastructure.EmailServices;
using AS.BLL.Services;
using AS.BLL.Services.Interfaces;
using AS.DAL.Models;
using AS.DAL.Repositories.Interfaces;
using AS.ErrorHandler;
using AS.DAL.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace AS.API.Infrastructure
{
    internal static class Installer
    {
        public static void RegisterDALServices(this IServiceCollection services)
        {
            services.RegisterAllTypes<Room>();
            services.RegisterAllTypes<Appointment>();
            services.RegisterAllTypes<Employee>();
            services.RegisterAllTypes<Service>();
            services.RegisterAllTypes<Customer>();

            services.AddTransient<ISender, SendGridSender>();
            services.AddTransient<IErrorHandler, ErrorHandler.ErrorHandler>();
        }

    }

    public static class ServiceCollectionExtensions
    {
        public static void RegisterAllTypes<T>(this IServiceCollection services) where T : BaseEntity
        {
            services.AddTransient<IBaseService<T>, BaseService<T>>();
            services.AddTransient<IBaseRepository<T>, BaseRepository<T>>();
        }
    }
}
