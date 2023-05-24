type Schema = 'string' | 'number' | 'boolean' | [Schema] | {
    [key: string]: Schema
}

type TypeOf<Actual extends Schema> = (
    Actual extends 'string' ? string :
    Actual extends 'number' ? number :
    Actual extends 'boolean' ? boolean :
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

// type Test = {
//     a: string;
//     b: {
//         a: number | undefined;
//         b: number;
//     }[] | undefined;
// }
type Test = TypeOf<{
    'a': 'string',
    'b?': [{
        'a?': 'number',
        'b': 'number',
    }],
}>

export {
    Schema,
    TypeOf,
}
