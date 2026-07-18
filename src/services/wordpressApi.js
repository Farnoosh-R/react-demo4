
const API_URL = "https://demo4.farnooshstudio.ir/api/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_embed`);

  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`
  );

  return res.json();
}

export async function getLatestPosts() {
  const res = await fetch(
    `${API_URL}/posts?per_page=3&_embed`
  );

  return res.json();
}