import Image from 'next/image';

const imageLoader = ({ src }) => {
  return src;
};

export const CustomImage = (props) => {
  const { altText, src, width = '100%', height = '100%', theme = '' } = props;
  return (
    <Image
      className={`${theme} transition ease-in-out delay-150 scale-100 hover:scale-110 duration-300`}
      loader={imageLoader}
      src={src}
      alt={altText}
      width={width}
      height={height}
    />
  );
};
