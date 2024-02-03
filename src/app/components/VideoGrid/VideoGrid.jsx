import { getFirstSixVideos } from "@/app/utils/vimeo";
import VideoModal from "@/app/components/VideoModal/VideoModal";
export default async function VideoGrid() {
  const videos = await getFirstSixVideos();
  if (videos) {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-fit mx-auto max-h-[600px] md:max-w-[600px]">
        {videos.map((video, index) => (
          <div
            key={video.uri}
            className="h-full w-full rounded-md overflow-hidden"
          >
            <VideoModal video={video} />
          </div>
        ))}
      </div>
    );
  } else {
    <p>Error when fetching Videos</p>;
  }
}
