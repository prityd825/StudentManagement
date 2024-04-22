// DeleteStudentCommandHandler.cs
using System.Runtime.Serialization;

namespace StudentTeacher_BackEnd_.Handler.StudentHandler
{
    [Serializable]
    internal class NotFoundException : Exception
    {
        private string v;
        private int studentId;

        public NotFoundException()
        {
        }

        public NotFoundException(string? message) : base(message)
        {
        }

        public NotFoundException(string v, int studentId)
        {
            this.v = v;
            this.studentId = studentId;
        }

        public NotFoundException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected NotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}