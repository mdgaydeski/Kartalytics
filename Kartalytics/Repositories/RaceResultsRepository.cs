using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class RaceResultsRepository : IRaceResultsRepository {
        private readonly IMongoCollection<RaceResult> _raceResults;

        public RaceResultsRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _raceResults = database.GetCollection<RaceResult>("raceResults");
        }

        public IEnumerable<RaceResult> GetRaceResultsByPlayerId(int id) {
            return _raceResults.Find(r => r.PlayerId == id).ToList();
        }

        public IEnumerable<RaceResult> GetRaceResultsByTrackId(int id) {
            return _raceResults.Find(r => r.TrackId == id).ToList();
        }
    }
}
