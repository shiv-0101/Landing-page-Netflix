
const Container1 = () => {
  return (
    <>
      <div className='flex justify-center px-40 py-20 items-center bg-gray-950 my-0 border-t-[10px] border-neutral-800'>
        <div className='z-10'>
          <h2 className='text-5xl text-white font-bold'>Enjoy on your TV</h2>
          <h6 className='py-8 text-2xl text-white w-[80%]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h6>
        </div>
        <div className='text-center justify-center items-center ml-[-73px] relative'>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <div className="z-[-0] overflow-hidden w-full h-full max-w-[73%] max-h-[54%] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[48%]">
            <video autoPlay playsInline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container1;