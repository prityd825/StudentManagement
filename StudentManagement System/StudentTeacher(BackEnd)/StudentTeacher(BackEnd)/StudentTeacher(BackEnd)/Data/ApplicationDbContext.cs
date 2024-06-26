﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }
        
       
    }
}
