using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TournamentsController : ControllerBase {
        private readonly IContextRepository<Tournament, TournamentCollectionModel, TournamentContextModel> _repository;

        public TournamentsController(IContextRepository<Tournament, TournamentCollectionModel, TournamentContextModel> repository) {
            _repository = repository;
        }

        // GET /api/tournaments
        [HttpGet]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get() {
            return new ObjectResult(_repository.Collection());
        }

        // GET /api/tournaments/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }

        // GET /api/tournaments/context
        [HttpGet("context")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetContext() {
            return new ObjectResult(_repository.ContextCollection());
        }
    }
}
