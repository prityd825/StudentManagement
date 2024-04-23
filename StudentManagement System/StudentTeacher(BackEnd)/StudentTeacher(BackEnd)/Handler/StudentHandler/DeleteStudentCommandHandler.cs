using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;
using StudentTeacher_BackEnd_.StudentHandler;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand, Unit>
    {
        private readonly IGenericRepository<Student> _studentRepository;

        public DeleteStudentCommandHandler(IGenericRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository ?? throw new ArgumentNullException(nameof(studentRepository));
        }

        public async Task<Unit> Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
        {
            var student = await _studentRepository.GetByIdAsync(request.StudentId);
            if (student == null)
            {
                throw new Exception($"Student with ID {request.StudentId} not found.");
            }

            await _studentRepository.DeleteAsync(student);

            return Unit.Value;
        }
    }
}
