export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'JOD'
    }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
    let unique = data.map(ele => ele[type])
    if (type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}
