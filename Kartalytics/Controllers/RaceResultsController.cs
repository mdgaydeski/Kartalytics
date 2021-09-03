using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RaceResultsController : ControllerBase {
        private readonly IRaceResultsRepository _repository;

        public RaceResultsController(IRaceResultsRepository repository) {
            _repository = repository;
        }

        // GET /api/raceresults/player/5
        [HttpGet("player/{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetRaceResultsByPlayerId(int id) {
            return new ObjectResult(_repository.GetRaceResultsByPlayerId(id));
        }

        // GET /api/raceresults/track/5
        [HttpGet("track/{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetRaceResultsByTrackId(int id) {
            return new ObjectResult(_repository.GetRaceResultsByTrackId(id));
        }
    }
}
