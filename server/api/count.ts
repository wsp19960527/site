let counter:number = 0
export default () => {
    counter++
    return JSON.stringify(counter)
}