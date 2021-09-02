using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TracksController : ControllerBase {
        private readonly IRepository<Track> _repository;

        public TracksController(IRepository<Track> repository) {
            _repository = repository;
        }

        // GET /api/tracks
        [HttpGet]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get() {
            return new ObjectResult(_repository.Collection());
        }

        // GET /api/tracks/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }
    }
}
