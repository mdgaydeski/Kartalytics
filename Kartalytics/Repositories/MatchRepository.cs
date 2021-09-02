using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class MatchRepository : IRepository<Match> {
        private readonly IMongoCollection<Match> _matches;

        public MatchRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _matches = database.GetCollection<Match>("matches");
        }

        public Match Find(int id) {
            return _matches.Find(m => m.Id == id).FirstOrDefault();
        }

        public IEnumerable<Match> Collection() {
            return _matches.Find(_ => true).ToList();
        }
    }
}
