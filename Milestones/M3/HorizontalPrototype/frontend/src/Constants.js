const prod = {
    router_basename: "/horizontal_prototype"
}
const dev = {
    router_basename: ""
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;