import { IPost } from "@/types/post";
export default function BlogItem({
  id,
  title,
  content,
}: IPost) {
  return (
      <ul className="border-white border-2 p-4 rounded-md">
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
      </ul>
  );
}
