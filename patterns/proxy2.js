function memoize(fn) {
    const cache = new Map();
    return new Proxy(fn, {
        apply(target, thisArg, args) {
            const cacheKey = JSON.stringify(args);
            if(cache.has(cacheKey)) {
                console.log("Cache hit!!!");
                return cache.get(cacheKey);
            }
            const res = target.apply(thisArg, args);
            cache.set(cacheKey, res);
            return res;
        }
    })
}

function fibonacci(n) {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n-2);
}

const memFib = memoize(fibonacci);

console.time("first");
    console.log(memFib(40));
console.timeEnd("first");

console.time("second");
    console.log(memFib(40));
console.timeEnd("second");