using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kartalytics.Models {
    public class RaceResult {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("playerId")]
        public string PlayerId { get; set; }

        [BsonElement("trackId")]
        public string TrackId { get; set; }

        [BsonElement("year")]
        public string Year { get; set; }

        [BsonElement("place")]
        public string Place { get; set; }
    }
}
