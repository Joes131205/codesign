import React from "react";

const Hero = () => {
    return (
        <section className="font-poppins px-[200px] py-[20px] flex justify-between">
            <div className="flex flex-col gap-[50px]">
                <div>
                    <img
                        src="/src/assets/images/corporate.png"
                        alt="Corporate"
                    />
                    <h1 className=" font-vampiro_one text-[96px]">Digital</h1>
                    <h1 className=" font-poppins text-[96px] font-bold">
                        Banking
                    </h1>
                    <h1 className=" font-poppins text-[96px] font-bold">
                        Platform
                    </h1>
                    <div className="flex gap-5">
                        <button className="bg-[#111875] text-white border-none px-[50px] py-[15px] border rounded-[15px] pointer">
                            Get Started
                        </button>
                        <button className="pointer border-none underline bg-transparent border-b-[1px] border-black">
                            How it works
                        </button>
                    </div>
                </div>

                <div>
                    <img src="/src/assets/images/cta.png" alt="CTA" />
                </div>
            </div>
            <div>
                <div>
                    <img src="/src/assets/images/banner.png" alt="Banner" />
                </div>
                <div>
                    <h2 className="font-bold text-[32px]">
                        Payroll, benefits & more.
                    </h2>
                    <p className="w-[70%]">
                        We provide document management with electronic signature
                        and payment technology
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
