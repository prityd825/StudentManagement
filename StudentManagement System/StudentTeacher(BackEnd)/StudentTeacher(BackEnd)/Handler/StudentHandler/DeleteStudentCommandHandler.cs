/*using MediatR;
using StudentTeacher_BackEnd_.Commands;
using StudentTeacher_BackEnd_.Data;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.StudentHandler;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand>
    {
        private readonly ApplicationDbContext _context;

        public DeleteStudentCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
        {
            var student = await _context.Students.FindAsync(request.StudentId);
            if (student == null)
            {
                throw new NotFoundException(nameof(Student), request.StudentId);
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
*/