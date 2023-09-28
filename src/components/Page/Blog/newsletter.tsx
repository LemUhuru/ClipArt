import React from 'react';


const Newsletter = () => {
    return (
        <div id="newsletter-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
<div className="relative p-4 w-full max-w-2xl h-full rounded-lg md:h-auto">
    <div className="flex relative items-center bg-white rounded-lg shadow dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/people-at-office.png" className="hidden h-64 rounded-l-lg md:flex" alt="office" />
            <div>
                <button type="button" data-modal-toggle="newsletter-modal" className="text-gray-400 absolute top-3 right-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="p-6 pt-4">
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Join our Newsletter
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Get started with our monthly newsletter for helpful tips on how to run your business smoothly.
                    </p>
                    <form action="#">
                        <div className="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative mr-3 w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your email" type="email" id="email" required={true} />
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</div>
</div>)
}


export default Newsletter;