using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class GetStudentByIdQuery : IRequest<Student>
    {
        public int StudentId { get; set; }
    }
}
