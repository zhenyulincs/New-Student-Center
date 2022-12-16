const prod = {
    router_basename: "/vertical_prototype"
}
const dev = {
    router_basename: ""
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;