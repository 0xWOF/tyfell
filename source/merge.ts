import { assign } from './assign'
import { clone } from './clone'

const merge: MergeFunction = function () {
    const result = Object({})

    for (let i=0; i<arguments.length; i++) {
        const source = arguments[i]

        assign(result, clone.deep(source))
    }

    return result
}

type MergeFunction = {
    <Source1, Source2> (
        source1: Source1, source2: Source2
    ): Source1 & Source2
    <Source1, Source2, Source3> (
        source1: Source1, source2: Source2, source3: Source3
    ): Source1 & Source2 & Source3
    <Source1, Source2, Source3, Source4> (
        source1: Source1, source2: Source2, source3: Source3, source4: Source4
    ): Source1 & Source2 & Source3 & Source4
}

export { merge }
