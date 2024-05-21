const Footer = () => {
    return (

        <div className="bg-gray-950 px-24 border-t-[10px] border-neutral-800">
           <p className='text-[rgba(255,255,255,0.7)] mx-20 mb-7 pt-16'>
                    Questions? Call 000-800-919-1694.
                </p>

            <div className='grid grid-flow-col ml-20 text-[rgba(255,255,255,0.7)]'>

             
                <div className='one'>
                    <p className='underline mb-2'>
                        FAQ
                    </p>
                    <p className='underline mb-2'>
                        Invester Relations
                    </p>
                    <p className='underline mb-2'>
                        Privacy
                    </p>
                    <p className='underline mb-4'>
                        Speed Test
                    </p>
                    <p className='underline mt-4'>
                       
                        <select className='btn bg-zinc-800  p-2 rounded-lg text-white'>
                            <option selected="">
                                English
                            </option>
                        </select>
                    </p>
                    <p className=' text-white'>
                       Netflix India
                    </p>

                </div>

                <div className='two'>
                    <p className='underline mb-4'>
                        Help Center
                    </p>
                    <p className='underline mb-4'>
                        Jobs
                    </p>
                    <p className='underline mb-4'>
                        Cookie Preference
                    </p>
                    <p className='underline mb-4'>
                        Legal Notice
                    </p>
                </div>

                <div className='three'>
                    <p className='underline mb-4'>
                        Account
                    </p>
                    <p className='underline mb-4'>
                        Ways to Watch
                    </p>
                    <p className='underline mb-4'>
                        Corporate Information
                    </p>
                    <p className='underline mb-4'>
                        Only on Netflix
                    </p>
                </div>

                <div className='four'>

                    <p className='underline mb-4'>
                        Media Center
                    </p>
                    <p className='underline mb-4'>
                        Term to Use
                    </p>
                    <p className='underline mb-4'>
                        Contact Us
                    </p>

                </div>       
            </div>
    </div>

 )
}

export default Footer