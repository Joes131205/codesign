import React from "react";

const Contact = () => {
    return (
        <section className="font-poppins px-[200px] py-[30px] rounded-[50px] rounded-b-none bg-gradient-to-b from-[#111875] to-[#202DD8] text-white ">
            <div>
                <div className="flex flex-col gap-10">
                    <span className=" font-semibold text-[96px]">
                        Contact us
                    </span>
                    <span className="text-[20px]">
                        Feel free to contact us at any time. We will get back to
                        you as soon as we can.
                    </span>
                    <form className="flex flex-col gap-5 items-start">
                        <div className="flex gap-5">
                            <input
                                placeholder="Name"
                                type="text"
                                className=" bg-transparent text-white border-b-[1px] border-white placeholder-white"
                            />
                            <input
                                placeholder="Email"
                                type="email"
                                className=" bg-transparent text-white border-b-[1px] border-white placeholder-white"
                            />
                        </div>

                        <input
                            placeholder="Message"
                            type="text"
                            className=" bg-transparent text-white border-b-[1px] border-white placeholder-white w-full"
                        />
                        <button className="bg-[#111875] text-white border-none px-[50px] py-[15px] border rounded-[15px] pointer">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
