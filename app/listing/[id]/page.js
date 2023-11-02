import getBusinesses from "../../../../lib/getBusiness";
import getSimilarBusinesses from "../../../../lib/getSimillarBusineses";
import ListDetails from "@/components/listDetails/page";

export default async function ListingsDetails({ params: { id } }) {
  const listData = getBusinesses(id);
  const listDetails = await listData;
  // console.log(listDetails);
  const website_name = "post-your-biz3.vercel.app";
  const responseData = getSimilarBusinesses(website_name, id);
  const similarData = await responseData;
  console.log(similarData);

  return <ListDetails listDetails={listDetails} similarData={similarData} />;
}
