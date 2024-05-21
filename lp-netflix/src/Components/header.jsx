
const Header = () => {
    return (
        <>

            <div className='flex justify-between items-center mx-28 py-0'>
                <div className='image px-12'> 
                    <img src="./logoNetflix.png" width="250px" />
                    {/* <div className='bg-[rgba(0,0,0,0.5)] over w-[100%] h-[100vh]'>

                </div> */}

                </div>
              
                <div className='button px-11'>
                    <button className='btn px-5 py-2 rounded-md bg-red-600 text-white font-bold'>Sign in</button>
                </div>
            </div>
        </>
    )   
}

export default Header