using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class CreateStudentCommand : IRequest<Student>
    {
        
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
    }
}
