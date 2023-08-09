const WhatDo = () => {
  return (
    <div className="mt-36 mb-20">
      <h1 className="md:text-5xl text-3xl mb-8 text-center text-white font-bold ">
        What are we doing?
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="md:text-5xl text-2xl text-sky-500 font-bold">Making DeFi Accessible At Scale</h1>
          <p className="text-white text-xl font-medium max-w-4xl">
            ROE Finance connects v2 LPs with professionals who borrow LP tokens
            to redeploy into v3 to generate additional interest income for v2
            LPs and professionals to make sustainable income from volatility
            arbitrage
          </p>
        </div>
        <div>
            <img src="/horse.png" alt="horse" />
        </div>
      </div>
    </div>
  );
};

export default WhatDo;
