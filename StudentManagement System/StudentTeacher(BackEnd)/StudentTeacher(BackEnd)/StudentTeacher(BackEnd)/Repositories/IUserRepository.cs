using System.Threading.Tasks;
using StudentTeacher_BackEnd_.Models.Domains;

namespace StudentTeacher_BackEnd_.Repositories
{
    public interface IUserRepository
    {
        Task<User> AuthenticateAsync(string email, string password);
    }
} 
