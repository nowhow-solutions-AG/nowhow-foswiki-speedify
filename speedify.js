
/** Indicate whether the current page was retrieved from the cache
 */
function indicateCacheUsage(){
    // Taken from https://stackoverflow.com/a/51817474/79485
    const isCached = performance.getEntriesByType("navigation")[0].transferSize === 0;
    if (isCached) {
        console.debug('Speedify: page served form cache');
        document.body.classList.add("is-cached");
    }
    else {
        console.debug('Speedify: page served form server');
    }
}

indicateCacheUsage();
