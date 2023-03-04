const check = {
    defined: <Value> (value: Value): value is Exclude<Value, undefined> => (
        value !== undefined
    ),

    undefined: (value: unknown): value is undefined => (
        value === undefined
    ),

    object: (value: unknown): value is Partial<Record<string, unknown>> => (
        value !== null
        && (typeof value === 'object' || value instanceof Object)
    ),
    
    array: (value: unknown): value is Array<unknown> => (
        Array.isArray(value)
    ),

    string: (value: unknown): value is string => (
        typeof value === 'string' || value instanceof String
    ),

    number: (value: unknown): value is number => (
        typeof value === 'number' || value instanceof Number
    ),

    function: (value: unknown): value is Function => (
        typeof value === 'function' || value instanceof Function
    ),

    actual: <Actual> (value: unknown, actual: Actual): value is Actual => (
        value === actual
    ),

    boolean: (value: unknown): value is boolean => (
        typeof value === 'boolean' || value instanceof Boolean
    ),
}

export { check }
