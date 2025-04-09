import "./App.css";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="min-h-scvreen">
      <section className="relative w-full bg-[#FFF5FD] md:py-20 py-4 overflow-hidden min-h-screen">
        <div className="max-w-[1280px] xl:px-0 px-5 mx-auto flex items-start justify-between">
          <div
            className="flex flex-col py-[120px] gap-6 max-w-[628px]"
            style={{ backgroundImage: "url('assets/img/japanMap.png')" }}
          >
            <div className="relative h-auto w-[200px]">
              <img alt="logo" src={logo} />
            </div>
            <h1 className="lg:text-[56px] text-[40px] font-bold lg:leading-[64px] text-darkTitle font-sans">
              Unlock Your Future in Japan: Explore Opportunities
            </h1>

            <p className="text-lg text-lightDark leading-[26px] max-w-[512px]  font-sans tracking-[0.02px]">
              Join thousands of successful candidates, consultancies, and
              employers who have achieved their goals with our streamlined visa
              and employment solutions.
            </p>
            <h1 className="font-bold text-3xl leading-normal">
              <span>Website Coming Soon on:</span>
              <br />
              25th April, 2025
            </h1>
          </div>

          <div className="relative hidden lg:block w-[729px] h-[604px]">
            <img
              className="absolute w-[506px] h-[604px] left-0 top-0"
              width="506"
              height="604"
              alt="Decorative rectangle"
              src="https://c.animaapp.com/OhYkAPfu/img/rectangle-429.svg"
            />
            <img
              className="absolute w-[382px] h-[604px] left-[347px] top-0"
              width="324"
              height="604"
              alt="Decorative rectangle"
              src="https://c.animaapp.com/OhYkAPfu/img/rectangle-430.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
