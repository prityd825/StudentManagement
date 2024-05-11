using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System;
using System.Threading;
using System.Threading.Tasks;
using Xunit;
using StudentTeacher_BackEnd_.Controllers;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using StudentTeacher_BackEnd_.Handler.StudentHandler;
using StudentTeacher_BackEnd_.Models.Domains;
using StudentTeacher_BackEnd_.StudentHandler;

namespace StudentTeacher_BackEnd_.Tests.Controllers
{
    public class StudentsControllerTests : IDisposable
    {
        private readonly IServiceScope _scope; 
        private readonly StudentController _controller;

        public StudentsControllerTests()
        {
           
            var services = new ServiceCollection();
            var builder = new ContainerBuilder();
            builder.Populate(services);
            var container = builder.Build();
            _scope = (IServiceScope?)container.BeginLifetimeScope(); 

            var mediatorMock = new Mock<IMediator>();
            _controller = new StudentController(mediatorMock.Object);
        }

        public void Dispose()
        {
            _scope.Dispose();
        }

        [Fact]
        public async Task CreateStudent_ReturnsOk()
        {
           
            var command = new CreateStudentCommand();
            var mediatorMock = new Mock<IMediator>(); 
            mediatorMock.Setup(m => m.Send(It.IsAny<CreateStudentCommand>(), CancellationToken.None)).ReturnsAsync(new Student());

            var result = await _controller.CreateStudent(command);

            Assert.IsType<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            Assert.NotNull(okResult.Value);
        }

        [Fact]
        public async Task GetStudentById_ReturnsOkWithTeacher()
        {
           
            var studentId = 1;
            var student = new Student { Id = studentId };
            var mediatorMock = new Mock<IMediator>(); 
            mediatorMock.Setup(m => m.Send(It.IsAny<GetStudentByIdQuery>(), CancellationToken.None)).ReturnsAsync(student);

         
            var result = await _controller.GetStudentById(studentId);

            Assert.IsType<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            Assert.Equal(student, okResult.Value);
        }

        [Fact]
        public async Task DeleteStudent_ReturnsNoContent()
        {
           
            var studentId = 1;
            var mediatorMock = new Mock<IMediator>(); 
            mediatorMock.Setup(m => m.Send(It.IsAny<DeleteStudentCommand>(), CancellationToken.None)).ReturnsAsync(Unit.Value);

            var result = await _controller.DeleteStudent(studentId);

           
            Assert.IsType<NoContentResult>(result);
        }
    }
}
