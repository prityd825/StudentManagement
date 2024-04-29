using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class GetAllTeacherQuery : IRequest<IEnumerable<Teacher>>
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
