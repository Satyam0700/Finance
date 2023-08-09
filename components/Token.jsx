import Button from "./Button";

const Token = () => {
  return (
    <div>
      <div className="mt-32 mb-20 flex flex-col text-center items-center justify-center gap-12">
        <h1 className="md:text-5xl text-3xl text-white font-bold ">
          Powered by <span className="text-blue-500">LP Token Liquidity</span>
        </h1>
        <p className="text-white text-lg md:text-xl">
          We have created the simplest one click experience to connect v2 LPs
          with professionals who are executing volatility based trading
          strategies to allow LPs to supply and earn additional interest income
          at scale
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 border-2 rounded-lg px-8 py-20 border-blue-500">
        <div className="flex flex-col gap-10 items-start">
          <span className="text-base font-semibold text-white">Supply</span>
          <h1 className="text-sky-500 font-semibold text-2xl md:text-4xl">
            Generate More Yield With Your LP Tokens
          </h1>
          <p className="text-white text-xl md:text-2xl">
            Supply your LP tokens to get supply interest and more on top of just
            your AMM swap fees.
          </p>
          <Button label={"SUPPLY NOW"} />
        </div>
        <div>
          <img src="/img1.png" alt="img" fill />
        </div>
      </div>

      <div className="flex md:flex-row mt-20 flex-col items-center justify-between gap-10 border-2 rounded-lg px-8 py-20 border-blue-500">
        <div className="flex flex-col gap-10 items-start">
          <span className="text-base font-semibold text-white">Trade</span>
          <h1 className="text-sky-500 font-semibold text-2xl md:text-4xl">
            Profit in Both Market Directions
          </h1>
          <p className="text-white text-xl md:text-2xl">
            Trade impermanent gains to profit when the market moves sharply in
            either direction
          </p>
          <Button label={"TRADE NOW"} />
        </div>
        <div>
          <img src="/trade.png" alt="img" fill />
        </div>
      </div>
    </div>
  );
};

export default Token;
