const urlPrefix = `http://www.smokeballdev.com`

const urlToResponseLookup = {
    [`${urlPrefix}/arnie0`]: 'Get to the chopper',
    [`${urlPrefix}/arnie1`]: 'MY NAME IS NOT QUAID',
    [`${urlPrefix}/arnie2`]: `What's wrong with Wolfie?`,
}

const httpRequestMockP = (url: string) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const responseData = urlToResponseLookup[url]
            if (responseData) {
                resolve(responseData)
            } else {
                reject(new Error('Your request has been terminated'))
            }
        }, 200)
    })

export const httpGet = async (url: string) => {
    try {
        const message = await httpRequestMockP(url)
        return { status: 200, body: JSON.stringify({ message }) }
    } catch (err) {
        return { status: 500, body: JSON.stringify({ message: err.message }) }
    }
}
