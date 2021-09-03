using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kartalytics.Models {
    public class RaceResult {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("playerId")]
        public int PlayerId { get; set; }

        [BsonElement("trackId")]
        public int TrackId { get; set; }

        [BsonElement("year")]
        public int Year { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }
    }
}
