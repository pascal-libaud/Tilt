type CurrentDate = {
    now: () => Date
}

export let currentDate: CurrentDate

export const setCurrentDate = (c: CurrentDate): void => {
    currentDate = c
}

export const isoDateTime = (d: Date): string => { return d.toISOString() }

export const formatDate = (d: Date): string => {
    const day = ('0' + d.getDate()).slice(-2)
    const month = ('0' + d.getMonth() + 1).slice(-2)
    const year = d.getFullYear()

    return `${day}/${month}/${year}`
}
