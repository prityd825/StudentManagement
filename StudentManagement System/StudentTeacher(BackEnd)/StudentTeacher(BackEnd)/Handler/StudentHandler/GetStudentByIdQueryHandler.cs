using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class GetStudentByIdQueryHandler : IRequestHandler<GetStudentByIdQuery, Student>
    {
        private readonly IGenericRepository<Student> _studentRepository;

        public GetStudentByIdQueryHandler(IGenericRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository ?? throw new ArgumentNullException(nameof(studentRepository));
        }

        public async Task<Student> Handle(GetStudentByIdQuery request, CancellationToken cancellationToken)
        {
            return await _studentRepository.GetByIdAsync(request.StudentId);
        }
    }
}
