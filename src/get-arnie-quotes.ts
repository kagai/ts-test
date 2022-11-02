import { httpGet } from './mock-http-interface'

// TODO define this type properly
type TResult = { [key: string]: string }

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
    // TODO: Implement this function.

    return Promise.all(
        urls.map(async (url: string): Promise<TResult> => {
            const response = await httpGet(url)

            const { message } = JSON.parse(response.body)
            return response.status === 200
                ? { 'Arnie Quote': message }
                : { FAILURE: message }
        })
    )
}
