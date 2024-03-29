import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="##56c8ea"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
