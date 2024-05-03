using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class GetAllTeacherQuery : IRequest<IEnumerable<Teacher>>
    {
    }
}
