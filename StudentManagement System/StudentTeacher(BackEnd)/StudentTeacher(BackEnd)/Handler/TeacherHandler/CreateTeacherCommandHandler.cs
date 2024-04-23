using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class CreateTeacherCommandHandler : IRequestHandler<CreateTeacherCommand,Teacher>
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public CreateTeacherCommandHandler(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        public async Task<Teacher> Handle(CreateTeacherCommand request, CancellationToken cancellationToken)
        {
            var teacher = new Teacher
            {
                Id = request.Id,
                Name = request.Name,
                Department = request.Department
            };

            await _teacherRepository.AddAsync(teacher);

            return teacher;
        }
    }
}
