import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import Link from 'next/link';

const data = [
    {
        question: "How to get started?",
        answer: "1.	Sign-up and select your chosen licensing package. 2.	Make payment securely via your credit card and then 3.	Activate your user profile from the link sent to your email. It’s as easy as that.",
    },
    {
        question: "Do I need to download software?",
        answer: "No additional software is required for the web-based management interface. The interface is accessible via any Chrome browser at anytime, anywhere in the world.Software is required for media players connected to digital displays. Detailed instructions are provided when purchasing your license and our support team are available to assist you with any technical queries.",
    },
    {
        question: "What web browser is best?",
        answer: "We believe Google Chrome to be the most stable, secure and widely used browser which is why Imagine Software was designed specifically for Chrome.",
    },
    {
        question: "How do I add more licenses?",
        answer: "You can upgrade your license or add more licenses at any time. Contact our sales team to upgrade your package or simply purchase additional licenses via your management interface.",
    },
    {
        question: "How long is the trial period?",
        answer: "The Imagine trial period is valid for 14 days from the time of registration. ",
    },
    {
        question: "How does billing work?",
        answer: "We offer flexible billing options to suit you and your business. This includes month-to-month and annual licenses. Annual licensing options are offered at a reduced rate compared to monthly options. A valid credit card is required. ",
    },
    {
        question: "How many licenses do I need? ",
        answer: "A single license is required for every media player device.",
    },
    {
        question: "Do I receive technical support?",
        answer: "Yes absolutely. We offer online support to all software customers via the management interface and dedicated WhatsApp line. This is offered at no additional cost. We do not however offer on-site support or hardware related support.",
    }
]

class PricingFaqContent extends Component {
    render() {
        return (
        <>
            <div className="container ptb-100 pt-0">
                <div className="row h-100 justify-content-center align-items-center">

                    <div className="col-lg-5 col-md-12">
                        <h3 className="pb-3">White Label Imagine </h3>
                        <p>Our white label software version allows users to customize the Imagine Software interface and design elements with their own company identity. 
                            All features and functionality is identical to the regular software can either can either be hosted on our cloud server or installed on external 3rd party server. </p>
                        <Link href="/contact">
                            <a className="btn btn-primary">Get in touch</a>
                        </Link>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className={{width: "100%"}}>
                            <img src={require('../../images/pricing/big-white hat.png')} alt="image" style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-accordion">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <div className="bar"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {data[0].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">
                                        {data[0].answer}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[1].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[1].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[2].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[2].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[3].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[3].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[4].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[4].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[5].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[5].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[6].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[6].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        {data[7].question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">{data[7].answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default PricingFaqContent;
