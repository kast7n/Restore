using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{

    public DbSet<Product> Products { get; set; }
    public DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "378d3909-357b-47f0-a12e-16bc6e474001",
            Name = "Member",
            NormalizedName = "MEMBER"
        }
        , new IdentityRole
        {
            Id = "5b836deb-3a05-44c4-a6e5-8bd7244cafa1",
            Name = "Admin",
            NormalizedName = "ADMIN"
        });
    }
}
