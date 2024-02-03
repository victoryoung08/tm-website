export async function getVimeoVideos() {
  const client_id = process.env.VIMEO_CLIENT_ID;
  const client_secret = process.env.VIMEO_CLIENT_SECRET;
  const access_token = process.env.VIMEO_ACCESS_TOKEN;
  const user_id = "154850236";
  const folder_id = "18952794";
  try {
    const res = await fetch(
      `	https://api.vimeo.com/users/${user_id}/projects/${folder_id}/videos`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getFirstSixVideos() {
  const videos = await getVimeoVideos();
  if (videos) {
    return videos.slice(0, 6);
  } else {
    return videos;
  }
}
