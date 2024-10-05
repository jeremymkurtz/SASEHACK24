//import Image from "next/image";
import pb from '../lib/pocketbase';

interface Post {
  id: string;
  field: string;
}

export default async function Home() {

  const records = await pb.collection('Post').getList<Post>(1, 50); // Fetch up to 50 posts
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Posts</h1>
      <ul>
        {records.items.map((post) => (
          <li key={post.id} className="mt-2">
            <p className="text-xl">{post.field}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
