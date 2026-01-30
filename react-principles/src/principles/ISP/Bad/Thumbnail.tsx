import type { IVideo } from "./VideoList";
import "../../SRP/style.css";

type  Props = {
  video: IVideo;
}

/*
The Thumbnail component is quite small and simple, but it has one problem - 
it expects a full video object to be passed in as props, while effectively
 using only one of its properties.
*/

const Thumbnail = ({ video }: Props) => {
  return <img src={video.coverUrl} className='card' alt='img' />;
};

export default Thumbnail;