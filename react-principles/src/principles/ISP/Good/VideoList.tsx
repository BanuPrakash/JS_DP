import Thumbnail from "./Thumbnail";

export type IVideo = {
  title: string;
  duration: string | number;
  coverUrl: string;
}

interface Props {
  items: IVideo[];
}

const VideoList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} coverUrl={item.coverUrl} />
      ))}
    </ul>
  );
};

export default VideoList;