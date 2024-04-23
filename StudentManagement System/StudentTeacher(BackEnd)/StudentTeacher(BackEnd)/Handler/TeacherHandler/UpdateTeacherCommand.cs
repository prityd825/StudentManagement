using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class UpdateTeacherCommand : IRequest<Teacher>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }

    }
}
