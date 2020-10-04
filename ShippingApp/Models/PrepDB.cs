using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace ShippingApp.Models
{
    public static class PrepDB
    {
        public static void PrepPopulation(IApplicationBuilder app){
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                SeedData(serviceScope.ServiceProvider.GetService<ProductContext>());
            }
        }

        public static void SeedData(ProductContext context)
        {
            System.Console.WriteLine("Applying Migrations ...");

            context.Database.Migrate();

            if(!context.ProductItems.Any())
            {
                System.Console.WriteLine("Adding data - seeding...");
                context.ProductItems.AddRange(
                    new Product() {ProductName = "Car"},
                    new Product() {ProductName = "Furniture"},
                    new Product() {ProductName = "Book"},
                    new Product() {ProductName = "MotorCycle"}
                );
                context.SaveChanges();
            }
            else
            {
                System.Console.WriteLine("Already have data - not seeding");
            }
        }
    }
}