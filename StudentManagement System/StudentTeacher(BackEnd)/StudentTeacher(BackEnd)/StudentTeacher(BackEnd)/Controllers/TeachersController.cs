using MediatR;
using Microsoft.AspNetCore.Mvc;
using StudentTeacher_BackEnd_.Handler.TeacherHandler;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TeacherController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTeacher(CreateTeacherCommand command)
        {
            var teacherId = await _mediator.Send(command);
            return Ok(teacherId);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllTeachers()
        {
            var teachers = await _mediator.Send(new GetAllTeacherQuery());
            return Ok(teachers);
        }

        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeacherById(int id)
        {
            var teacher = await _mediator.Send(new GetTeacherByIdQuery { TeacherId = id });
            if (teacher == null)
            {
                return NotFound();
            }
            return Ok(teacher);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(int id, [FromBody] UpdateTeacherCommand command)
        {
            
            command.Id = id;


            if (string.IsNullOrEmpty(command.Name) && string.IsNullOrEmpty(command.Department))
            {
                return BadRequest("At least one field (Name or Department) must be provided for update.");
            }

            var updatedTeacher = await _mediator.Send(command);
            return Ok(updatedTeacher);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            var command = new DeleteTeacherCommand { TeacherId = id };
            await _mediator.Send(command);
            return NoContent();
        } 
    }
}
