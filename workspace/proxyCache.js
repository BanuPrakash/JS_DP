function memoize(fn) {
    const cache = new Map(); // closure

    return new Proxy(fn, {
        apply(target, thisArg, args) {
            const cacheKey = JSON.stringify(args);
            if (cache.has(cacheKey)) {
                console.log("Cache hit!!");
                return cache.get(cacheKey);
            }
            const result = target.apply(thisArg, args); // fibanocci(40)
            cache.set(cacheKey, result);
            return result;
        }
    })
}

function fibanocci(no) {
    return (no <= 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
}

// memFib is a proxy with cache as closure
const memFib = memoize(fibanocci);

console.time("first");
console.log(memFib(40));
console.timeEnd("first");

console.time("second");
console.log(memFib(40));
console.timeEnd("second");
