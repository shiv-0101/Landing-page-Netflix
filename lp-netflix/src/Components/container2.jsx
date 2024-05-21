
const Container2 = () => {
    return (
        <div>
            <div className='flex justify-center gap-7 bg-gray-950 pb-32 px-20 border-t-[10px] border-neutral-800'>

                <div className='left'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />

                    <div className='bg-black h-12 relative w-[53%] ml-[140px]  rounded-lg  mx-6 mt-[-133px] flex items-center justify-between px-5 pt-[36px] pb-[44px]
                    '>
                        <div className='image class1 max-w-lg '>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='h-6 ' />
                        </div>
                        <div className='content class2  items-center my-4'>
                            <div className=''>
                                Stranger Things
                            </div>
                            <div className='text-blue-700'>
                                Downloading...
                            </div>
                        </div>
                        <div className='class3'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" className='h-9' />
                        </div>
                    </div>

                </div>

                <div className='right flex justify-center items-center basis-[50%]'>
                    <div className='grid justify-center items-center'>
                        <h2 className='text-5xl  text-white font-bold w-[80%] leading-[3.5rem]'>
                            Download your shows to watch offline
                        </h2>
                        <p className='text-2xl  text-white w-[70%] my-4'>
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
  };
  
  export default Container2;