const extract = (object: unknown, ...keys: string[]): unknown | undefined => (
    keys.reduce((previous, current) => previous[current], Object(object))
)

extract.entries = <Value> (object: Partial<Record<string, Value>> | Value[]): [string, Value][] => (
    Object.keys(object).map(key => [key, (object as Partial<Record<string, Value>>)[key]!])
)

extract.keys = <Value> (object: Partial<Record<string, Value>> | Value[]): string[] => (
    Object.keys(object)
)

extract.values = <Value> (object: Partial<Record<string, Value>> | Value[]): Value[] => (
    Object.keys(object).map(key => (object as Partial<Record<string, Value>>)[key]!)
)

export { extract }
