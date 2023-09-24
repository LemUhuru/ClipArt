import React from 'react';

function FAQSection() {
    const faqData = [
        {
            question: "What do you mean by \"Figma assets\"?",
            answer: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens."
        },
        {
            question: "What does \"lifetime access\" exactly mean?",
            answer: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge."
        },
        {
            question: "How does support work?",
            answer: "We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project. Feel free to contact us and we'll help you out as soon as we can."
        },
        {
            question: "I want to build more than one project. Is that allowed?",
            answer: "Yes, you can use the design and code for as many projects as you want. There are no restrictions on the number of projects you can build."
        },
        // ... Add other questions similarly ...
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                </svg>
                                {faq.question}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;