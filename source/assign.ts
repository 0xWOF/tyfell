import { extract } from './extract'

const assign_object = extract(Object, 'assign')

const assign_common: AssignFunction = function <Type extends object> (object: Type) {
    const result = Object(object)

    for (let i=1; i<arguments.length; i++) {
        const source = arguments[i]
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                result[key] = source[key]
            }
        }
    }
}

const assign: AssignFunction = (
    assign_object
    ?? assign_common
)

type AssignFunction = {
    <Type extends object, Source1 extends object>
    (object: Type, source1: Source1): asserts object is Type & Source1
    <Type extends object, Source1 extends object, Source2 extends object>
    (object: Type, source1: Source1, source2: Source2): asserts object is Type & Source1 & Source2
    <Type extends object, Source1 extends object, Source2 extends object, Source3 extends object>
    (object: Type, source1: Source1, source2: Source2, source3: Source3): asserts object is Type & Source1 & Source2 & Source3
}

declare const Object: ObjectConstructor & {
    assign: AssignFunction | undefined
}

export { assign }
