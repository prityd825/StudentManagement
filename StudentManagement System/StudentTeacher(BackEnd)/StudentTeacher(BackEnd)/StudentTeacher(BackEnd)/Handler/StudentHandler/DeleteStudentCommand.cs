using MediatR;

namespace StudentTeacher_BackEnd_.StudentHandler
{
    public class DeleteStudentCommand : IRequest<Unit>
    {
        public int StudentId { get; set; }
    }
}
