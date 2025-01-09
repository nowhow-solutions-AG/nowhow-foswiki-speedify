
// From https://stackoverflow.com/a/51817474/79485
var isCached = performance.getEntriesByType("navigation")[0].transferSize === 0;
if (isCached) {
    console.debug('Speedify: page served form cache');
    document.body.classList.add("is-cached");
}
else {
    console.debug('Speedify: page served form server');
}