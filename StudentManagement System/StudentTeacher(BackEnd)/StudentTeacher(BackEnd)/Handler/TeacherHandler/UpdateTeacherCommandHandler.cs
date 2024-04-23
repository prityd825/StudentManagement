using MediatR;
using StudentTeacher_BackEnd_.Controllers;
using StudentTeacher_BackEnd_.Data;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;
using System;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Handler.TeacherHandler
{
    public class UpdateTeacherCommandHandler : IRequestHandler<UpdateTeacherCommand, Teacher>
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public UpdateTeacherCommandHandler(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository ?? throw new ArgumentNullException(nameof(teacherRepository));
        }

        public async Task<Teacher> Handle(UpdateTeacherCommand request, CancellationToken cancellationToken)
        {
            // Retrieve the teacher from the repository by ID
            var teacher = await _teacherRepository.GetByIdAsync(request.Id);

            // If the teacher is not found, throw an exception
            if (teacher == null)
            {
                throw new NotFoundException($"Teacher with ID {request.Id} not found.");
            }

            teacher.Name = request.Name;
            teacher.Department = request.Department;

            await _teacherRepository.UpdateAsync(teacher);

            return teacher;
        }
    }

    
}
