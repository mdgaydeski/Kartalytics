using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Kartalytics.Models {
    public class MatchResult {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("playerId")]
        public int PlayerId { get; set; }

        [BsonElement("tournamentId")]
        public int TournamentId { get; set; }

        [BsonElement("points")]
        public int Points { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }

        [BsonElement("placeTotals")]
        public IEnumerable<int> PlaceTotals { get; set; }

        [BsonElement("raceResults")]
        public IEnumerable<MatchRaceResult> RaceResults { get; set; }
    }

    public class MatchRaceResult {
        [BsonElement("trackId")]
        public int TrackId { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }
    }
}
