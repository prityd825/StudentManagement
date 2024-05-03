using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class GetAllTeacherQueryHandler : IRequestHandler<GetAllTeacherQuery, IEnumerable<Teacher>>
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public GetAllTeacherQueryHandler(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository ?? throw new ArgumentNullException(nameof(teacherRepository));
        }

        public async Task<IEnumerable<Teacher>> Handle(GetAllTeacherQuery request, CancellationToken cancellationToken)
        {
            return await _teacherRepository.GetAllAsync();
        }
    }


}
