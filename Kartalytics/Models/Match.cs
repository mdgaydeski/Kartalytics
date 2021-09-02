using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Kartalytics.Models {
    public class Match {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

#nullable enable
        [BsonElement("cupOrder")]
        [BsonIgnoreIfNull]
        public IEnumerable<int>? CupOrder { get; set; }

        [BsonElement("trackOrder")]
        [BsonIgnoreIfNull]
        public IEnumerable<int>? TrackOrder { get; set; }
#nullable disable

        [BsonElement("results")]
        public IEnumerable<int> Results { get; set; }

        [BsonElement("videos")]
        public IEnumerable<MatchVideo> Videos { get; set; }
    }

    public class MatchVideo {
        [BsonElement("host")]
        public string Host { get; set; }

        [BsonElement("url")]
        public string Url { get; set; }
    }
}
