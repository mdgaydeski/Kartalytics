using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase {
        private readonly IContextRepository<Player, PlayerCollectionModel, PlayerContextModel> _repository;

        public PlayersController(IContextRepository<Player, PlayerCollectionModel, PlayerContextModel> repository) {
            _repository = repository;
        }

        // GET /api/players
        [HttpGet]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get() {
            return new ObjectResult(_repository.Collection());
        }

        // GET /api/players/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }

        // GET /api/players/context
        [HttpGet("context")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetContext() {
            return new ObjectResult(_repository.ContextCollection());
        }
    }
}
