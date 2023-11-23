import getPost from "../../../lib/getPost";
import PostDetails from "@/components/postDetails/page";

export default async function PostingDetails({ params: { id } }) {
  const postData = getPost(id);
  const postDetails = await postData;
  
  return <PostDetails postDetails={postDetails} />;
}
