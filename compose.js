function compose(...fns) {
    return fns.reduceRight((prev, next) => {
        return value => next(prev(value))
    }, value => value)
}


const example = compose(
    val => { console.log(1); return `1<${val}>`; },
    val => { console.log(2); return `2<${val}>`; },
    val => { console.log(3); return `3<${val}>`; }
)

debugger
