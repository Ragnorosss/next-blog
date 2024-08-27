interface IHeaderProps {
    id: number
    title: string
    link: string
} 
export const HeaderList: IHeaderProps[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Posts",
        link: "/posts",
    },
    {
        id: 3,
        title: "About",
        link: "/about",
    },
    {
        id: 4,
        title: "Sign-in",
        link: "/sign-in",
    },
    {
        id: 5,
        title: "Sign-up",
        link: "/sign-up",
    },
]