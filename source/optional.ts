import { check } from './check'
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

    boolean: (value: unknown): boolean | undefined => (
        check.boolean(value) ? value : undefined
    ),

    actual: <Actual> (value: unknown, actual: Actual): Actual | undefined => (
        check.actual(value, actual) ? value : undefined
    ),

    try: upcast<{
        <Result> (block: () => Result): Result | undefined
        <Result> (block: () => Promise<Result>): Promise<Result | undefined>
    }>(async <Result> (block: () => Promise<Result>): Promise<Result | undefined> => {
        try { return await block() }
        catch { return undefined }
    }),
}

export { optional }
