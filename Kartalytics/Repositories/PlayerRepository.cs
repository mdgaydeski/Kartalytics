using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class PlayerRepository : IRepository<Player> {
        private readonly IMongoCollection<Player> _players;

        public PlayerRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _players = database.GetCollection<Player>("players");
        }

        public Player Find(int id) {
            return _players.Find(p => p.Id == id).FirstOrDefault();
        }

        public IEnumerable<Player> Collection() {
            return _players.Find(_ => true).ToList();
        }
    }
}
