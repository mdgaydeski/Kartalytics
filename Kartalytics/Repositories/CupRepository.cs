using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class CupRepository : IRepository<Cup> {
        private readonly IMongoCollection<Cup> _cups;

        public CupRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _cups = database.GetCollection<Cup>("cups");
        }

        public Cup Find(int id) {
            return _cups.Find(c => c.Id == id).FirstOrDefault();
        }

        public IEnumerable<Cup> Collection() {
            return _cups.Find(_ => true).ToList();
        }
    }
}
