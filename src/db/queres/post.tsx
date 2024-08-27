import { notFound } from 'next/navigation'
import { db } from '..'
import type { Post } from '@prisma/client'
export async function fetchPosts():Promise<Post[]> {
    return await db.post.findMany({
        orderBy:{
            updatedAt: 'desc'
        }
    })
}
export async function fetchPostById(id: string): Promise<Post | null> { // Function to fetch a single post by its ID.
    const post = await db.post.findFirst({
        where: {
            id
        }
    })

    if (!post) {
        notFound() 
    }

    return post
}