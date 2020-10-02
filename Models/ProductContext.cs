using Microsoft.EntityFrameworkCore;

namespace ShippingApp.Models
{
    public class ProductContext: DbContext
    {
        public ProductContext (DbContextOptions<ProductContext> options) : base(options)
        {

        }

        public DbSet<Product> ProductItems {get; set;}
    }
}