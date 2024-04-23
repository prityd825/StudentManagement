using MediatR;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class DeleteTeacherCommand: IRequest<Unit>
    {
        public int TeacherId { get; set; }
    }
}
