import { check } from './check'
import { TypeOf, Schema } from './schema'
import { throws } from './throws'

const error = Error('unmatched type')

const required = <Value> (value: Value): Exclude<Value, undefined> => (
    check.defined(value) ? value : throws(error)
)

required.object = (value: unknown): Partial<Record<string, unknown>> => (
    check.object(value) ? value : throws(error)
)

required.array = (value: unknown): Array<unknown> => (
    Array.isArray(value) ? value : throws(error)
)

required.string = (value: unknown): string => (
    check.string(value) ? value : throws(error)
)

required.number = (value: unknown): number => (
    check.number(value) ? value : throws(error)
)

required.function = (value: unknown): Function => (
    check.function(value) ? value : throws(error)
)

required.promise = (value: unknown): Promise<unknown> => (
    check.promise(value) ? value : throws(error)
)

required.boolean = (value: unknown): boolean => (
    check.boolean(value) ? value : throws(error)
)

required.actual = <Actual> (value: unknown, actual: Actual): Actual => (
    check.actual(value, actual) ? value : throws(error)
)

required.try = <Result> (block: () => Result): Result => {
    try { return block() }
    catch { return throws(error) }
}

required.schema = <Actual extends Schema> (
    value: unknown,
    schema: Actual
): TypeOf<Actual> => (
    check.schema(value, schema) ? value : throws(error)
)

export { required }
