using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Kartalytics.Models {
    public class Track {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

#nullable enable
        [BsonElement("altNames")]
        [BsonIgnoreIfNull]
        public IEnumerable<string>? AltNames { get; set; }
#nullable disable
    }
}
