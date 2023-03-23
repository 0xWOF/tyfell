type Schema = 'string' | 'number' | 'boolean' | [Schema] | {
    [key: string]: Schema
}

type TypeOf<Actual extends Schema> = (
    Actual extends 'string' ? string :
    Actual extends 'number' ? number :
    Actual extends 'boolean' ? boolean :
    Actual extends [infer Element extends Schema] ? TypeOf<Element>[] :
    Actual extends { [key: string]: Schema } ? { [Key in keyof Actual]: TypeOf<Actual[Key]> } :
    never
)

export {
    Schema,
    TypeOf,
}
