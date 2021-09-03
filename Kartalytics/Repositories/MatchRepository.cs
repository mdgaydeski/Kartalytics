using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class MatchRepository : IMatchRepository {
        private readonly IMongoCollection<Match> _matches;
        private readonly IMongoCollection<MatchResult> _matchResults;

        public MatchRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _matches = database.GetCollection<Match>("matches");
            _matchResults = database.GetCollection<MatchResult>("matchResults");
        }

        public Match Find(int id) {
            return _matches.Find(m => m.Id == id).FirstOrDefault();
        }

        public IEnumerable<MatchResult> GetResultsByMatchId(int id) {
            IEnumerable<int> resultIdList = _matches.Find(m => m.Id == id).FirstOrDefault().Results;
            return _matchResults.Find(mr => resultIdList.Contains(mr.Id)).ToList();
        }

        public IEnumerable<MatchResult> GetResultsByPlayerId(int id) {
            return _matchResults.Find(mr => mr.PlayerId == id).ToList();
        }
    }
}
