using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TournamentsController : ControllerBase {
        private readonly IRepository<Tournament> _repository;

        public TournamentsController(IRepository<Tournament> repository) {
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
    }
}
