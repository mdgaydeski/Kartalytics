using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class PlayerRepository : IContextRepository<Player, PlayerCollectionModel, PlayerContextModel> {
        private readonly IMongoCollection<Player> _players;

        public PlayerRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _players = database.GetCollection<Player>("players");
        }

        public Player Find(int id) {
            return _players.Find(p => p.Id == id).FirstOrDefault();
        }

        public IEnumerable<PlayerCollectionModel> Collection() {
            return _players.Find(p => p.TournamentResults.Count() > 0)
                .ToList()
                .Select(p => new PlayerCollectionModel {
                    Id = p.Id,
                    Name = p.Name,
                    Country = p.Country
                }
            );
        }

        public IEnumerable<PlayerContextModel> ContextCollection() {
            return _players.Find(p => p.TournamentResults.Count() > 0)
                .ToList()
                .Select(p => new PlayerContextModel {
                    Id = p.Id,
                    Name = p.Name
                }
            );
        }
    }
}
