using MediatR;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class CreateStudentCommand : IRequest<int>
    {
        public string Name { get; set; }
        public string Department { get; set; }
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
    }
}
