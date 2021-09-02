using Kartalytics.Data;
using Kartalytics.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Kartalytics.Repositories {
    public class TournamentRepository : IContextRepository<Tournament, TournamentCollectionModel, TournamentContextModel> {
        private readonly IMongoCollection<Tournament> _tournaments;

        public TournamentRepository(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _tournaments = database.GetCollection<Tournament>("tournaments");
        }

        public Tournament Find(int id) {
            return _tournaments.Find(t => t.Id == id).FirstOrDefault();
        }

        public IEnumerable<TournamentCollectionModel> Collection() {
            return _tournaments.Find(_ => true)
                .ToList()
                .Select(t => new TournamentCollectionModel { 
                Id = t.Id,
                Name = t.Name,
                Group = t.Group,
                Location = t.Location,
                StartDate = t.StartDate,
                EndDate = t.EndDate,
                Results = t.Results.Where(r => r.Place <= 4)
            });
        }

        public IEnumerable<TournamentContextModel> ContextCollection() {
            return _tournaments.Find(_ => true)
                .ToList()
                .Select(t => new TournamentContextModel {
                    Id = t.Id,
                    Name = t.Name,
                    AltNames = t.AltNames
                });
        }
    }
}
