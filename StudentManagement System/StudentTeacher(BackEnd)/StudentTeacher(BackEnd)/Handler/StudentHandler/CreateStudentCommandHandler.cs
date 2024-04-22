﻿using MediatR;
using StudentTeacher_BackEnd_.Data;
using StudentTeacher_BackEnd_.Handler.StudentHandler;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Handlers
{
    public class CreateStudentCommandHandler : IRequestHandler<CreateStudentCommand, int>
    {
        private readonly IGenericRepository<Student> _studentRepository;

        public CreateStudentCommandHandler(IGenericRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<int> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
        {
            var student = new Student
            {
                Name = request.Name,
                Department = request.Department,
                TeacherId = request.TeacherId,
                TeacherName = request.TeacherName
            };

            await _studentRepository.AddAsync(student);

            return student.Id;
        }
    }
}