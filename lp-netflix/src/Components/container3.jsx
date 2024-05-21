
const Container3 = () => {
    return (
      <>
        <div className='flex justify-center px-40 py-20 items-center bg-gray-950 my-0 border-t-[10px] border-neutral-800'>
          <div className='z-10'>
            <h2 className='text-5xl text-white font-bold'>Watch everywhere</h2>
            <h6 className='py-8 text-2xl text-white w-[80%]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h6>
          </div>
          <div className='z-[0] text-center justify-center items-center ml-[-73px] relative'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
            <div className="z-[-1] overflow-hidden w-full h-full max-w-[63%] max-h-[47%] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[35%]">
              <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="" />
              </video>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Container3;