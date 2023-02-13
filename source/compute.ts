import { check } from './check'

const compute = <Value, Result> (
    value: Value, block: (value: Value) => Result
): Result => (
    block(value)
)

compute.defined = <Value, Result> (
    value: Value, block: (value: Exclude<Value, undefined>) => Result
): Result | undefined => (
    check.defined(value) ? block(value) : undefined
)

compute.undefined = <Result> (
    value: unknown, block: (value: undefined) => Result
): Result | undefined => (
    check.undefined(value) ? block(value) : undefined
)

compute.object = <Result> (
    value: unknown, block: (value: Partial<Record<string, unknown>>) => Result
): Result | undefined => (
    check.object(value) ? block(value) : undefined
)

compute.array = <Result> (
    value: unknown, block: (value: Array<unknown>) => Result
): Result | undefined => (
    check.array(value) ? block(value) : undefined
)

compute.string = <Result> (
    value: unknown, block: (value: string) => Result
): Result | undefined => (
    check.string(value) ? block(value) : undefined
)

compute.number = <Result> (
    value: unknown, block: (value: number) => Result
): Result | undefined => (
    check.number(value) ? block(value) : undefined
)

compute.function = <Result> (
    value: unknown, block: (value: Function) => Result
): Result | undefined => (
    check.function(value) ? block(value) : undefined
)

compute.boolean = <Result> (
    value: unknown, block: (value: boolean) => Result
): Result | undefined => (
    check.boolean(value) ? block(value) : undefined
)

export { compute }