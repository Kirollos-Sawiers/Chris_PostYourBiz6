const revalidate = 3600; // revalidate at most every hour

export default async function getListings() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/get-businesses-website-request/${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    { cache: "no-store", revalidate }
  );

  if (!res.ok) throw new Error("failed to get businesses");

  return res.json();
}
