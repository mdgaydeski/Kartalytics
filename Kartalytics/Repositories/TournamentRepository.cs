using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class TournamentRepository : IRepository<Tournament> {
        private readonly IMongoCollection<Tournament> _tournaments;

        public TournamentRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _tournaments = database.GetCollection<Tournament>("tournaments");
        }

        public Tournament Find(int id) {
            return _tournaments.Find(t => t.Id == id).FirstOrDefault();
        }

        public IEnumerable<Tournament> Collection() {
            return _tournaments.Find(_ => true).ToList();
        }
    }
}
