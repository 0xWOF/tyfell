import { check } from './check'
import { throws } from './throws'

const required = <Value> (value: Value): Exclude<Value, undefined> => (
    check.defined(value) ? value : throws()
)

required.object = (value: unknown): Partial<Record<string, unknown>> => (
    check.object(value) ? value : throws()
)

required.array = (value: unknown): Array<unknown> => (
    Array.isArray(value) ? value : throws()
)

required.string = (value: unknown): string => (
    check.string(value) ? value : throws()
)

required.number = (value: unknown): number => (
    check.number(value) ? value : throws()
)

required.function = (value: unknown): Function => (
    check.function(value) ? value : throws()
)

required.boolean = (value: unknown): string => (
    check.string(value) ? value : throws()
)

required.try = <Result> (block: () => Result): Result => {
    try { return block() }
    catch { return throws() }
}

export { required }