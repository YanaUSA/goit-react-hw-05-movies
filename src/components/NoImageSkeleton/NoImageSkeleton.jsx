import noImage from '../NoImageSkeleton/no-img.jpg';

export const NoImageSkeleton = () => {
  return (
    <div>
      <img
        src={noImage}
        alt={`${'No image available'}`}
        style={{ width: 50 }}
      />
    </div>
  );
};
