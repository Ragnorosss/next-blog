import { IBlogs } from '@/types/blogs';
import { NextResponse } from 'next/server';


const blogs:IBlogs[] = [
  { id: 1, title: 'First Blog', content: 'This is the first blog post.', userId:1, username:"Ragn" },
  { id: 2, title: 'Second Blog', content: 'This is the second blog post.', userId:1, username:"Ragn" },
];

export async function GET() {
  return NextResponse.json(blogs);
}
