using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MatchesController : ControllerBase {
        private readonly IMatchRepository _repository;

        public MatchesController(IMatchRepository repository) {
            _repository = repository;
        }

        // GET /api/matches/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }

        // GET /api/matches/5/results
        [HttpGet("{id}/results")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetResultsByMatchId(int id) {
            return new ObjectResult(_repository.GetResultsByMatchId(id));
        }

        // GET /api/matches/player/5
        [HttpGet("player/{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetResultsByPlayerId(int id) {
            return new ObjectResult(_repository.GetResultsByPlayerId(id));
        }
    }
}
