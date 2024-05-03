using Moq;
using Xunit;
using StudentTeacher_BackEnd_.Controllers;
using StudentTeacher_BackEnd_.Handler.TeacherHandler;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using StudentTeacher_BackEnd_.Models.Domains;


namespace StudentTeacher_BackEnd_.Tests.Controllers
{
    public class TeacherControllerTests
    {
        private readonly Mock<IMediator> _mediatorMock;
        private readonly TeacherController _controller;

        public TeacherControllerTests()  
        {
            _mediatorMock = new Mock<IMediator>();
            _controller = new TeacherController(_mediatorMock.Object);
        }

        [Fact]
        public async Task CreateTeacher_ReturnsOk()
        {
            
            var command = new CreateTeacherCommand();
            _mediatorMock.Setup(m => m.Send(It.IsAny<CreateTeacherCommand>(), CancellationToken.None)).ReturnsAsync(new Teacher());

           
            var result = await _controller.CreateTeacher(command);

            
            Assert.IsType<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            Assert.NotNull(okResult.Value);
        }

        [Fact]
        public async Task GetAllTeachers_ReturnsOkWithTeachersList()
        {
            
            var teachers = new List<Teacher> { new Teacher(), new Teacher() };
            _mediatorMock.Setup(m => m.Send(It.IsAny<GetAllTeacherQuery>(), CancellationToken.None)).ReturnsAsync(teachers);

           
            var result = await _controller.GetAllTeachers();

            Assert.IsType<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            var teachersResult = okResult.Value as List<Teacher>;
            Assert.Equal(teachers.Count, teachersResult?.Count);

        }

        [Fact]
        public async Task GetTeacherById_ReturnsOkWithTeacher()
        {
            
            var teacherId = 1;
            var teacher = new Teacher { Id = teacherId };
            _mediatorMock.Setup(m => m.Send(It.IsAny<GetTeacherByIdQuery>(), CancellationToken.None)).ReturnsAsync(teacher);

          
            var result = await _controller.GetTeacherById(teacherId);

            Assert.IsType<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            Assert.Equal(teacher, okResult.Value);
        }


        [Fact]
        public async Task UpdateTeacher_ReturnsNoContent()
        {
           
            var teacherId = 1;
            var command = new UpdateTeacherCommand();

            _mediatorMock
                .Setup(m => m.Send(It.IsAny<UpdateTeacherCommand>(), CancellationToken.None))
                .Returns((Task<Teacher>)Task.CompletedTask)
                .Verifiable();

           
            var result = await _controller.UpdateTeacher(teacherId, command);

           
            Assert.IsType<NoContentResult>(result);
            _mediatorMock.Verify();
        }


        [Fact]
        public async Task DeleteTeacher_ReturnsNoContent()
        {
           
            var teacherId = 1;
            _mediatorMock.Setup(m => m.Send(It.IsAny<DeleteTeacherCommand>(), CancellationToken.None)).ReturnsAsync(Unit.Value);

           
            var result = await _controller.DeleteTeacher(teacherId);

           
            Assert.IsType<NoContentResult>(result);
        }
    }
}
