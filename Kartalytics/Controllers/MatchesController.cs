using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MatchesController : ControllerBase {
        private readonly IRepository<Match> _repository;

        public MatchesController(IRepository<Match> repository) {
            _repository = repository;
        }

        // GET /api/matches/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }
    }
}
