using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class TrackRepository : IContextRepository<Track, Track, Track> {
        private readonly IMongoCollection<Track> _tracks;

        public TrackRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _tracks = database.GetCollection<Track>("tracks");
        }

        public Track Find(int id) {
            return _tracks.Find(t => t.Id == id).FirstOrDefault();
        }

        public IEnumerable<Track> Collection() {
            return _tracks.Find(_ => true).ToList().OrderBy(t => t.Id);
        }

        public IEnumerable<Track> ContextCollection() {
            return _tracks.Find(_ => true).ToList().OrderBy(t => t.Id);
        }
    }
}
