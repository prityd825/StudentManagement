using StudentTeacher_BackEnd_.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace StudentTeacher_BackEnd_.Models.Domains
{
    public class Student
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Department { get; set; }
        public int TeacherId { get; set; }
        public required string TeacherName { get; set; }
        public  Teacher Teacher { get; set; }
    }


}
