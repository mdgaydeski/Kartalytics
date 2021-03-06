using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Kartalytics.Models {
    public class PlayerContextModel {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }
    }

    public class PlayerCollectionModel : PlayerContextModel {
        [BsonElement("country")]
        public string Country { get; set; }
    }

    public class Player : PlayerCollectionModel {
        [BsonElement("tournamentResults")]
        public IEnumerable<PlayerResult> TournamentResults { get; set; }
    }

    public class PlayerResult {
        [BsonElement("tournamentId")]
        public int TournamentId { get; set; }

        [BsonElement("year")]
        public int Year { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }

        [BsonElement("matches")]
        public IEnumerable<int> Matches { get; set; }
    }
}
