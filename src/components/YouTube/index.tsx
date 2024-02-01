import styles from "./styles.module.css";

// Taken from: https://github.com/PaulieScanlon/mdx-embed/blob/main/packages/mdx-embed/src/components/youtube/youtube.tsx

export interface IYouTubeProps {
  /** YouTube id */
  videoId?: string;
  /** YouTube Playlist id */
  playlistId?: string;
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** No Cookie option */
  noCookie?: boolean;
}

export default function YouTube({
  videoId,
  playlistId,
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  noCookie = false,
}: IYouTubeProps): JSX.Element {
  const { h, m, s } = skipTo;

  const tH = h! * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;

  const provider = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com";

  const baseUrl = `${provider}/embed/`;
  const src = `${baseUrl}${
    videoId
      ? `${videoId}?&autoplay=${autoPlay}&start=${startTime}`
      : `&videoseries?list=${playlistId}`
  }`;

  return (
    <div className={styles.youtube}>
      <iframe
        data-testid="youtube"
        title={`youTube-${videoId ? videoId : playlistId}`}
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height={360}
      />
    </div>
  );
}
