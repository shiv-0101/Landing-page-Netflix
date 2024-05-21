import React, { useState } from 'react';

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleQuestionClick = (questionNumber) => {
        setOpenQuestion(questionNumber === openQuestion ? null : questionNumber);
    };

    return (
        <div className='container px-20 py-8 bg-gray-950 border-t-[10px] border-neutral-800'>
            <h2 className='text-5xl text-white font-bold text-center py-12'>Frequently Asked Questions</h2>

            <div
                className={`question1 items-center bg-neutral-800 mx-32 flex justify-between px-12 py-6 my-2 hover:bg-neutral-600 ${openQuestion === 1 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(1)}
            >
                <div className='left text-white text-2xl'>What is Netflix</div>
                <div className='right text-white text-5xl '>{openQuestion === 1 ? '-' : '+'}</div>
            </div>
            {openQuestion === 1 && (
                <div className='answer1 bg-neutral-800 text-white text-2xl mx-32 flex justify-between px-12 py-5 my-2 hover:bg-neutral-600'>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br/><br/>

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </div>
            )}

            <div
                className={`question2 items-center bg-neutral-800  mx-32 flex justify-between px-12 py-6 my-2 hover:bg-neutral-600  ${openQuestion === 2 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(2)}
            >
                <div className='left text-2xl text-white'>How much does Netflix cost?</div>
                <div className='right text-white text-5xl'>{openQuestion === 2 ? '-' : '+'}</div>
            </div>
            {openQuestion === 2 && (
                <div className='answer2 bg-neutral-800 text-2xl text-white mx-32 flex justify-between px-12 py-5 my-2 hover:bg-neutral-600'>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                </div>
            )}

            <div
                className={`question3 items-center my-2  mx-32 bg-neutral-800  flex justify-between px-12 py-6 hover:bg-neutral-600 ${openQuestion === 3 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(3)}
            >
                <div className='left text-2xl text-white'>Where can I watch?</div>
                <div className='right text-white text-5xl'>{openQuestion === 3 ? '-' : '+'}</div>
            </div>
            {openQuestion === 3 && (
                <div className='answer3 bg-neutral-800 text-2xl text-white mx-32 flex justify-between px-12 py-5 my-2 hover:bg-neutral-600'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/><br/>

                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </div>
            )}

            <div
                className={`question4 items-center my-2  mx-32 bg-neutral-800  flex justify-between px-12 py-6 hover:bg-neutral-600 ${openQuestion === 4 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(4)}
            >
                <div className='left text-2xl text-white'>How do I Cancel?</div>
                <div className='right text-white text-5xl'>{openQuestion === 4 ? '-' : '+'}</div>
            </div>
            {openQuestion === 4 && (
                <div className='answer4 bg-neutral-800 text-2xl text-white mx-32 flex justify-between px-12 py-5 my-2 hover:bg-neutral-600'>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.

                </div>
            )}

            <div
                className={`question5 items-center my-2  mx-32 bg-neutral-800  flex justify-between px-12 py-6 hover:bg-neutral-600 ${openQuestion === 5 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(5)}
            >
                <div className='left text-2xl text-white'>What can I watch on Netflix?</div>
                <div className='right text-white text-5xl'>{openQuestion === 5 ? '-' : '+'}</div>
            </div>
            {openQuestion === 5 && (
                <div className='answer5 bg-neutral-800 text-2xl text-white mx-32 flex justify-between px-12 py-5 my-2 hover:bg-neutral-600'>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </div>
            )}

            <div
                className={`question6 items-center my-2 mx-32 bg-neutral-800  flex justify-between px-12 py-6 hover:bg-neutral-600 ${openQuestion === 6 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(6)}
            >
                <div className='left text-2xl text-white'>Is Netflix Good for Kids?</div>
                <div className='right text-white text-5xl'>{openQuestion === 6 ? '-' : '+'}</div>
            </div>
            {openQuestion === 6 && (
                <div className='answer6 bg-neutral-800 text-2xl text-white mx-32 flex justify-between px-12 py-3 my-2 hover:bg-neutral-600'>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </div>
            )}

        <div className='text-center text-2xl my-10 text-white' >
                Ready to watch? Enter your email to create or restart your membership.

            </div>
            <div className='text-center flex justify-center item-center gap-5 my-5'>
                <input type='text' className='btn p-2 rounded-md bg-transparent border-slate-600 border-2 text-blue-900 placeholder-gray-400 ' placeholder='Email Address'/>
                <button className='btn bg-red-700 rounded-lg text-white px-4 py-2'>Get Started 
        {/* FontAwesomeIcon icon={faGreaterThan} /> */}
                </button>
            </div>
        </div>
    );
};

export default Faq;