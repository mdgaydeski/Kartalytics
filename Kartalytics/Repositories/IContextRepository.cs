using System.Collections.Generic;

namespace Kartalytics.Repositories {
    public interface IContextRepository<T, U, V> : IRepository<T> {
        IEnumerable<U> Collection();
        IEnumerable<V> ContextCollection();
    }
}
