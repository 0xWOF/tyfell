# tyfell

utility library for type safe and null safe and declarative programming on typescript.

## example

```typescript
import { compute, optional, required, throws } from 'tyfell'

const Package = (object: unknown) => optional.try(() => compute.object<Package>(object, object => ({
    name: required.string(object['name']),
    version: required.string(object['version']),
    build: optional.number(object['build']),
})))

type Package = {
    name: string
    version: string
    build?: number
}

let package: Package = compute.object(
    optional.try(() => JSON.parse(`{"name":"tyfell","version":"0.0.0"}`)),
    Package,
) ?? throws(Error('json string can not be computed to Package type'))
```

## feature

- assign: same with Object.assign
- check: check type and return boolean
- clone: clone object as shallow or deep
- compute: check type and run function and return result or return undefined
- create: create object with source and modification
- extract: extract from object
- merge: merge objects
- optional: check type and return value or return undefined
- required: check type and return value or throw error
- throws: throw error

## platform

if you transfile tyfell, you can use tyfell on every ecmascript 5 compatible platform.
