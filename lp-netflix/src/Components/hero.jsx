
const Hero = () => {
    return (
        <div className='flex flex-col items-center h-[89vh] justify-center px-8 '>
            <div className='text-center text-white'>
                <h2 className='text-5xl font-extrabold'>Unlimited movies, TV shows, and more</h2>
            </div>
            <div className='text-center text-white text-2xl pt-5'>
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className='text-center text-white text-xl py-5'>
                <p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
            </div>
            <div className='text-center flex gap-3 w-1/2 justify-center'>
            <input type='text' className='btn px-4 py-3  bg-transparent border-slate-300 border-2 w-1/2 text-white placeholder-gray-400 ' placeholder='Email or mobile number'/>
            <button className='btn bg-red-700 text-white px-6 py-2 font-bold text-xl'>
                    Get Started</button>
            </div>
        </div>
    );
};

export default Hero;