import { ColorRing } from 'react-loader-spinner'
const LoadSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
     <ColorRing
  visible={true}
  height="60"
  width="60"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#262163', '#262163', '#262163', '#262163', '#262163']}
  />
    </div>
  );
}

export default LoadSpinner