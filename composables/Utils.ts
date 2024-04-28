export const $utils = {
    sleep (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },
    audio(url: string) {
        const play = () => {
            const audio = new Audio(url)
            audio.play()
        }
        return { play }
    }
}