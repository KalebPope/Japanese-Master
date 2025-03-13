using Microsoft.EntityFrameworkCore;
using JapaneseMasterAPI.Entities;

namespace JapaneseMasterAPI.Data
{
    public class JMDbContext(DbContextOptions<JMDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
    }
}
