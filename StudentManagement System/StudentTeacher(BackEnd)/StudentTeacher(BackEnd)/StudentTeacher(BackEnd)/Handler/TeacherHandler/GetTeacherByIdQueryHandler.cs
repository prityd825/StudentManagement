using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class GetTeacherByIdQueryHandler : IRequestHandler<GetTeacherByIdQuery, Teacher>
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public GetTeacherByIdQueryHandler(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository ?? throw new ArgumentNullException(nameof(teacherRepository));
        }

        public async Task<Teacher> Handle(GetTeacherByIdQuery request, CancellationToken cancellationToken)
        {
            return await _teacherRepository.GetByIdAsync(request.TeacherId);
        }
    }
}
