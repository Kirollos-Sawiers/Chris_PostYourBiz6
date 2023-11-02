const revalidate = 3600;

export default async function getPostings() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/get-all-posts-website-request/${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    { cache: "no-store", revalidate }
  );

  if (!res.ok) throw new Error("failed to get businesses");

  return res.json();
}
