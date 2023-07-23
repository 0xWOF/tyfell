type Schema = 'string' | 'number' | 'boolean' | 'array' | 'object' | [Schema] | {
    [key: string]: Schema
}

type TypeOf<Actual extends Schema> = (
    Actual extends 'string' ? string :
    Actual extends 'number' ? number :
    Actual extends 'boolean' ? boolean :
    Actual extends 'array' ? Array<unknown> :
    Actual extends 'object' ? object :
    Actual extends [infer Element extends Schema] ? TypeOf<Element>[] :
    Actual extends { [key: string]: Schema } ? {
        [Key in keyof Actual as (
            Key extends `${infer ActualKey}?` ? (
                ActualKey
            ) : (
                Key
            )
        )]: Key extends `${string}?` ? (
            TypeOf<Actual[Key]> | undefined
        ) : (
            TypeOf<Actual[Key]>
        )
    } :
    never
)

export {
    Schema,
    TypeOf,
}
