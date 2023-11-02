const revalidate = 3600; // revalidate at most every hour

export default async function getSimilarBusinesses(website_name, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/get-posts-by-businessID`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        website_name,
        id,
      }),
    }
  );

  if (!res.ok) throw new Error("failed to get businesses posts");

  return res.json();
}
