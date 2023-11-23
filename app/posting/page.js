import getPostings from "@/lib/getPostings";
import ListViewPostings from "@/components/postings/page";

export default async function GetPostingsData() {
  const postingsData = getPostings();
  const postings = await postingsData;
  console.log(postings.data[1].business);
  return <ListViewPostings postings={postings} />;
}
