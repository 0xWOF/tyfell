import { clone } from './clone'

const create = {
    fromEntries: <Value> (entries: [string, Value][]): Partial<Record<string, Value>> => {
        const object: Record<string, Value> = {}
        entries.forEach(([key, value]) => {
            object[key] = value
        })

        return object
    },

    mapped: <Value, Result> (
        object: Partial<Record<string, Value>>,
        map: (key: string, value: Value) => [string, Result],
    ): Partial<Record<string, Result>> => {
        const mapObject: Partial<Record<string, Result>> = {}

        Object.keys(object).forEach(key => {
            const [mapKey, mapValue] = map(key, object[key]!)
            mapObject[mapKey] = mapValue
        })

        return mapObject
    },

    filtered: <Value> (
        object: Partial<Record<string, Value>>,
        filter: (key: string, value: Value) => boolean,
        ): Partial<Record<string, Value>> => {
        const filterObject: Partial<Record<string, Value>> = {}

        Object.keys(object).forEach(key => {
            if (filter(key, object[key]!))
            filterObject[key] = object[key]!
        })

        return filterObject
    },

    modified: <Type extends object> (
        object: Type,
        modify: (object: Type) => void,
    ): Type => {
        const result = clone.deep(object)
        modify(result)

        return result
    },
}

export { create }
