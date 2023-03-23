import { check } from './check'
import { TypeOf, Schema } from './schema'
import { upcast } from './upcast'

const optional = {
    object: (value: unknown): Partial<Record<string, unknown>> | undefined => (
        check.object(value) ? value : undefined
    ),

    array: (value: unknown): Array<unknown> | undefined => (
        Array.isArray(value) ? value : undefined
    ),

    string: (value: unknown): string | undefined => (
        check.string(value) ? value : undefined
    ),

    number: (value: unknown): number | undefined => (
        check.number(value) ? value : undefined
    ),

    function: (value: unknown): Function | undefined => (
        check.function(value) ? value : undefined
    ),

    promise: (value: unknown): Promise<unknown> | undefined => (
        check.promise(value) ? value : undefined
    ),

    boolean: (value: unknown): boolean | undefined => (
        check.boolean(value) ? value : undefined
    ),

    actual: <Actual> (value: unknown, actual: Actual): Actual | undefined => (
        check.actual(value, actual) ? value : undefined
    ),

    try: upcast<{
        <Result> (block: () => Result): Result | undefined
        <Result> (block: () => Promise<Result>): Promise<Result | undefined>
    }>(<Result> (block: () => Promise<Result> | Result): Promise<Result | undefined> | Result | undefined => {
        let value: Promise<Result> | Result

        try { value = block() }
        catch { return undefined }

        if (check.promise(value)) {
            return (async () => {
                try { return await value }
                catch { return undefined }
            })()
        }
        else {
            return value
        }
    }),

    schema: <Actual extends Schema> (
        value: unknown,
        schema: Actual
    ): TypeOf<Actual> | undefined => (
        check.schema(value, schema) ? value : undefined
    ),
}

export { optional }
