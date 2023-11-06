import getPostings from "@/lib/getPostings";
import ListViewPostings from "@/components/postings/page";

export default async function GetPostingsData() {
  const postingsData = getPostings();
  const postings = await postingsData;
  return <ListViewPostings postings={postings} />;
}
