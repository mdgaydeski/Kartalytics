using Kartalytics.Models;
using System.Collections.Generic;

namespace Kartalytics.Repositories {
    public interface IMatchRepository {
        Match Find(int id);
        IEnumerable<MatchResult> GetResultsByMatchId(int id);
        IEnumerable<MatchResult> GetResultsByPlayerId(int id);
    }
}
