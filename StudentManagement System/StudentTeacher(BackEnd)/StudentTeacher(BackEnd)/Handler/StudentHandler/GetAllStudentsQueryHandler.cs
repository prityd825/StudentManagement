using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class GetAllStudentsQueryHandler : IRequestHandler<GetAllStudentsQuery, IEnumerable<Student>>
    {
        private readonly IGenericRepository<Student> _studentRepository;

        public GetAllStudentsQueryHandler(IGenericRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository ?? throw new ArgumentNullException(nameof(studentRepository));
        }

        public async Task<IEnumerable<Student>> Handle(GetAllStudentsQuery request, CancellationToken cancellationToken)
        {
            return await _studentRepository.GetAllAsync();
        }
    }

   
}
