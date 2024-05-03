using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class GetTeacherByIdQuery : IRequest<Teacher>
    {
        public int TeacherId { get; set; }
    }
}
