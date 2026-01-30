type Props = {
  coverUrl: string;
}

const Thumbnail = ({ coverUrl }: Props) => {
  return <img src={coverUrl} className='card' alt='img' />;
};

export default Thumbnail;