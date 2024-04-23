using MediatR;
using StudentTeacher_BackEnd_.Data;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;
using System;
using System.Threading;
using System.Threading.Tasks;


namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Student>
    {
        private readonly IGenericRepository<Student> _studentRepository;

        public UpdateStudentCommandHandler(IGenericRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository ?? throw new ArgumentNullException(nameof(studentRepository));
        }

        public async Task<Student> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
        {
            var student = await _studentRepository.GetByIdAsync(request.Id);
            if (student == null)
            {
                throw new Exception($"Student with ID {request.Id} not found.");
            }

            student.Name = request.Name;
            student.Department = request.Department;
            student.TeacherName = request.TeacherName;

            await _studentRepository.UpdateAsync(student);

            return student;
        }
    }
}
