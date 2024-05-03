using MediatR;
using Microsoft.AspNetCore.Mvc;
using StudentTeacher_BackEnd_.Handler.StudentHandler;
using StudentTeacher_BackEnd_.StudentHandler;

namespace StudentTeacher_BackEnd_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StudentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudent(CreateStudentCommand command)
        {
            var studentId = await _mediator.Send(command);
            return Ok(studentId);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _mediator.Send(new GetAllStudentsQuery());
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentById(int id)
        {
            var student = await _mediator.Send(new GetStudentByIdQuery { StudentId = id });
            if (student == null)
            {
                return NotFound();

            }
            return Ok(student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, UpdateStudentCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await _mediator.Send(command);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var command = new DeleteStudentCommand { StudentId = id };
            await _mediator.Send(command);
            return NoContent();
        }
    }
}
