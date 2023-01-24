import { check } from './check'

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

    number: (value: unknown): string | undefined => (
        check.string(value) ? value : undefined
    ),

    function: (value: unknown): Function | undefined => (
        check.function(value) ? value : undefined
    ),

    boolean: (value: unknown): boolean | undefined => (
        check.boolean(value) ? value : undefined
    ),

    try: <Result> (block: () => Result): Result | undefined => {
        try { return block() }
        catch { return undefined }
    },
}

export { optional }