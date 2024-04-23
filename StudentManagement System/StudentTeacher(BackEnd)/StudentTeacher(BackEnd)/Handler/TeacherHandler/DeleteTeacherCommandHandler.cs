using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class DeleteTeacherCommandHandler : IRequestHandler<DeleteTeacherCommand, Unit>
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public DeleteTeacherCommandHandler(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository ?? throw new ArgumentNullException(nameof(teacherRepository));
        }

        public async Task<Unit> Handle(DeleteTeacherCommand request, CancellationToken cancellationToken)
        {
            var teacher = await _teacherRepository.GetByIdAsync(request.TeacherId);
            if (teacher == null)
            {
                throw new Exception($"Student with ID {request.TeacherId} not found.");
            }

            await _teacherRepository.DeleteAsync(teacher);

            return Unit.Value;
        }
    }
}
