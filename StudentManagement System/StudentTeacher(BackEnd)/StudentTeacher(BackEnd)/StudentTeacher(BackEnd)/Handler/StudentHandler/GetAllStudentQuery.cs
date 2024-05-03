using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class GetAllStudentsQuery : IRequest<IEnumerable<Student>>
    {
    }
}
