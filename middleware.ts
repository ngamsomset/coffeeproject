export { default } from "next-auth/middleware"

export const config = { 
    matcher: [
        "/", 
        "/cafes", 
        "/account", 
        "/cafes/:path*", 
        "/about"
    ] 
}