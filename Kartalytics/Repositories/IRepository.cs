using System.Collections.Generic;

namespace Kartalytics.Repositories {
    public interface IRepository<T> {
        T Find(int id);
        IEnumerable<T> Collection();
    }
}
