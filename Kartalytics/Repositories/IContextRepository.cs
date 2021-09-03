using System.Collections.Generic;

namespace Kartalytics.Repositories {
    public interface IContextRepository<T, U, V> {
        T Find(int id);
        IEnumerable<U> Collection();
        IEnumerable<V> ContextCollection();
    }
}
