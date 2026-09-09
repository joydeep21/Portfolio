// The portfolio is served as static markup from public/index.html.
// This entry point exists only to retire the service worker that earlier
// visits registered, so returning visitors are not served a cached copy
// of the previous site.
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

serviceWorkerRegistration.unregister();
