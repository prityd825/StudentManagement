using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudentTeacher_BackEnd_.Handler.StudentHandler;
using StudentTeacher_BackEnd_.StudentHandler;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;

namespace StudentTeacher_BackEnd_.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

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
            try
            {
                var username = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;
                var token = HttpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
                if (string.IsNullOrEmpty(token))
                {
                    return Unauthorized("Token not found in request header.");
                }

                Console.WriteLine($"JWT Token: {token}");

                foreach (var claim in HttpContext.User.Claims)
                {
                    Console.WriteLine($"Claim Type: {claim.Type}, Claim Value: {claim.Value}");
                }

               

                var students = await _mediator.Send(new GetAllStudentsQuery());
                return Ok(students);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
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

       // [Authorize("UpdateProfile")]
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
