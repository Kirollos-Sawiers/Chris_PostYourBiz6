import getListings from "@/lib/getListings";
import ListView from "@/components/listings/page";

export default async function GetListingsData() {
  const listingsData = getListings();
  const listings = await listingsData;
  console.log(listings);
  return <ListView listings={listings} />;
}
