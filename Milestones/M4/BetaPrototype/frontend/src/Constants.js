const prod = {
    router_basename: "/merry_christmas"
}
const dev = {
    router_basename: ""
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;