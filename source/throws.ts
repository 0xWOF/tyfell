const throws: {
    <Value> (error: Value): never,
    (error?: Error): never,
} = (error = Error()) => {
    throw error
}

export { throws }
