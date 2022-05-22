import { assign } from './assign'
import { check } from './check'
import { extract } from './extract'

const clone = <Value extends object> (object: Value): Value => {
    const result = Object({})

    assign(result, object)

    return result
}

clone.deep = <Value extends object> (object: Value): Value => {
    const result = Object({})

    extract.entries(object).forEach(([key, value]) => {
        if (check.object(value)) {
            result[key] = clone.deep(value)
        }
        else {
            result[key] = value
        }
    })

    return result
}

export { clone }