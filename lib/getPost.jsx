const revalidate = 3600; // revalidate at most every hour

export default async function getPost(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/get-post-website_request/${id}`,
    { cache: "no-store", revalidate }
  );

  if (!res.ok) throw new Error("failed to get businesses");

  return res.json();
}
