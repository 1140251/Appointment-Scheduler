using System;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Npgsql;

namespace AS.API.Infrastructure
{
    public class HealthCheckService : IHealthCheck
    {
        private static readonly string DefaultTestQuery = "Select 1";

        public string ConnectionString { get; }

        public string TestQuery { get; }

        public HealthCheckService(string connectionString)
        : this(connectionString, testQuery: DefaultTestQuery)
        {
        }

        public HealthCheckService(string connectionString, string testQuery)
        {
            ConnectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
            TestQuery = testQuery;
        }

        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                using (NpgsqlConnection connection = new NpgsqlConnection(ConnectionString))
                {
                    connection.Open();
                    using (NpgsqlCommand command = connection.CreateCommand())
                    {
                        command.CommandType = CommandType.Text;
                        command.CommandText = "SELECT 1";
                        return (int)await command.ExecuteScalarAsync().ConfigureAwait(false) != 1 ? HealthCheckResult.Unhealthy(string.Format("PostgreSqlCheck: Unhealthy")) : HealthCheckResult.Healthy(string.Format("PostgreSqlCheck: Healthy"));
                    }
                }
            }
            catch (Exception ex)
            {
                return HealthCheckResult.Unhealthy(string.Format("PostgreSqlCheck: Exception during check: {0}", (object)ex.GetType().FullName));
            }
        }

    }
}

