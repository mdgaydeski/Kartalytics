using Kartalytics.Models;
using System.Collections.Generic;

namespace Kartalytics.Repositories {
    public interface IRaceResultsRepository {
        IEnumerable<RaceResult> GetRaceResultsByPlayerId(int id);
        IEnumerable<RaceResult> GetRaceResultsByTrackId(int id);
    }
}
