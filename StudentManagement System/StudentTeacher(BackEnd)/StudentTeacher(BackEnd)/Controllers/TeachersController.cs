using Microsoft.AspNetCore.Mvc;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentTeacher_BackEnd_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        private readonly IGenericRepository<Teacher> _teacherRepository;

        public TeachersController(IGenericRepository<Teacher> teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }
        // GET: api/<TeachersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeachers()
        {
            var teachers = await _teacherRepository.GetAllAsync();
            return Ok(teachers);
        }

        // GET api/<TeachersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetTeacher(int id)
        {
            var teacher = await _teacherRepository.GetByIdAsync(id);
            if (teacher == null)
            {
                return NotFound();
            }
            return Ok(teacher);
        }

        // POST api/<TeachersController>
        [HttpPost]
        public async Task<ActionResult<Teacher>> CreateTeacher(Teacher teacher)
        {
            await _teacherRepository.AddAsync(teacher);
            return CreatedAtAction(nameof(GetTeacher), new { id = teacher.Id }, teacher);
        }

        // PUT api/<TeachersController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(int id, Teacher teacher)
        {
            if (id != teacher.Id)
            {
                return BadRequest();
            }

            await _teacherRepository.UpdateAsync(teacher);

            return NoContent();
        }

        // DELETE api/<TeachersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Teacher>> DeleteTeacher(int id)
        {
            var teacher = await _teacherRepository.GetByIdAsync(id);
            if (teacher == null)
            {
                return NotFound();
            }

            await _teacherRepository.DeleteAsync(teacher);

            return teacher;
        }
    }
}
