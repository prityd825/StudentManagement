using MediatR;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class CreateTeacherCommand : IRequest<int>
    {
        public string Name { get; set; }
        public string Department { get; set; }
    }
}
