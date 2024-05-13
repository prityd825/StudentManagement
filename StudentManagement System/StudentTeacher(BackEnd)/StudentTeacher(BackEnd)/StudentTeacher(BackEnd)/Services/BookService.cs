using StudentTeacher_BackEnd_.Models.MongoDomain;
using StudentTeacher_BackEnd_.Repositories.MongoRepository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentTeacher_BackEnd_.Services
{
    public class BookService
    {
        private readonly IMongoGenericRepository<Book> _bookRepository;

        public BookService(IMongoGenericRepository<Book> bookRepository)
        {
            _bookRepository = bookRepository ?? throw new ArgumentNullException(nameof(bookRepository));
        }

        public async Task<List<Book>> GetAsync() =>
            await _bookRepository.GetAllAsync();

        public async Task<Book> GetAsync(string id) =>
            await _bookRepository.GetByIdAsync(id);

        public async Task CreateAsync(Book newBook) =>
            await _bookRepository.CreateAsync(newBook);

        public async Task UpdateAsync(string id, Book updatedBook) =>
            await _bookRepository.UpdateAsync(id, updatedBook);

        public async Task RemoveAsync(string id) =>
            await _bookRepository.DeleteAsync(id);
    }
}
