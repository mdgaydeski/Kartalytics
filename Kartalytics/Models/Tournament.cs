using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Kartalytics.Models {
    public class TournamentContextModel {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

#nullable enable
        [BsonElement("altNames")]
        [BsonIgnoreIfNull]
        public IEnumerable<string>? AltNames { get; set; }

        [BsonIgnoreIfNull]
        public int? TotalPlayers { get; set; }
#nullable disable
    }

    public class TournamentCollectionModel : TournamentContextModel {
        [BsonElement("group")]
        public string Group { get; set; }

        [BsonElement("location")]
        public string Location { get; set; }

        [BsonElement("startDate")]
        public string StartDate { get; set; }

        [BsonElement("endDate")]
        public string EndDate { get; set; }

        [BsonElement("results")]
        public IEnumerable<TournamentResult> Results { get; set; }
    }

    public class Tournament : TournamentCollectionModel {
        [BsonElement("rounds")]
        public IEnumerable<TournamentRound> Rounds { get; set; }
    }

    public class TournamentResult {
        [BsonElement("playerId")]
        public int PlayerId { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }
    }

    public class TournamentRound {
        [BsonElement("roundNumber")]
        public int RoundNumber { get; set; }

        [BsonElement("roundLevel")]
        public string RoundLevel { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("isPoolRound")]
        public bool? IsPoolRound { get; set; }

        [BsonElement("totalAdvance")]
        [BsonIgnoreIfNull]
        public int? TotalAdvance { get; set; }

        [BsonElement("matches")]
        public IEnumerable<int> Matches { get; set; }

        [BsonElement("results")]
        public IEnumerable<RoundResult> Results { get; set; }
    }

    public class RoundResult {
        [BsonElement("playerId")]
        public int PlayerId { get; set; }

        [BsonElement("points")]
        public IEnumerable<int> Points { get; set; }

        [BsonElement("place")]
        public int Place { get; set; }
    }
}
