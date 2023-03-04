const extract = <Type extends object, Key extends keyof Type> (object: Type, key: Key): Type[Key] => (
    object[key] as unknown as Type[Key]
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
