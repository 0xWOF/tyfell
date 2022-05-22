const compute = <Result> (block: () => Result): Result => (
    block()
)

export { compute }