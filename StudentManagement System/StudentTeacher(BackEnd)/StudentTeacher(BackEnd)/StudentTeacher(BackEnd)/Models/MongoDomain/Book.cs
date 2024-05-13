using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System.Text.Json.Serialization;
namespace StudentTeacher_BackEnd_.Models.MongoDomain
{
    public class Book
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string? BookName { get; set; }
        public decimal price { get; set; }
        public string? Category { get; set; }
        public string? Author { get; set; }

    }
}
