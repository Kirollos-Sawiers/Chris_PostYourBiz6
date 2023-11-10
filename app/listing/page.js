import getListings from "@/lib/getListings";
import ListView from "@/components/listings/page";

export default async function GetListingsData() {
  const listingsData = getListings();
  const listings = await listingsData;
  return <ListView listings={listings} />;
}
