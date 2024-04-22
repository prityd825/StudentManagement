using MediatR;

namespace StudentTeacher_BackEnd_.StudentHandler
{
    public interface DeleteStudentCommand
    {
        public int StudentId { get; set; }
    }
}
