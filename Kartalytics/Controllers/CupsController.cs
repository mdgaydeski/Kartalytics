using Kartalytics.Models;
using Kartalytics.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kartalytics.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class CupsController : ControllerBase {
        private readonly IContextRepository<Cup, Cup, Cup> _repository;

        public CupsController(IContextRepository<Cup, Cup, Cup> repository) {
            _repository = repository;
        }

        // GET /api/cups
        [HttpGet]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get() {
            return new ObjectResult(_repository.Collection());
        }

        // GET /api/cups/5
        [HttpGet("{id}")]
        [ResponseCache(Duration = 86400)]
        public IActionResult Get(int id) {
            return new ObjectResult(_repository.Find(id));
        }

        // GET /api/cups/context
        [HttpGet("context")]
        [ResponseCache(Duration = 86400)]
        public IActionResult GetContext() {
            return new ObjectResult(_repository.ContextCollection());
        }
    }
}
