import { siteContent } from "../content/siteContent";

const AboutMe = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white">

      {/* Brush divider */}
      <svg
        className="block h-[65px] w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M0,52
            C150,25 300,78 460,48
            C620,18 770,82 930,50
            C1100,18 1280,70 1440,42
          "
          fill="none"
          stroke="black"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="
            M0,56
            C160,31 310,82 470,53
            C630,24 780,87 940,55
            C1110,23 1290,75 1440,47
          "
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.65"
        />

        <path
          d="
            M20,48
            C180,20 330,74 490,44
            C650,14 800,78 960,46
            C1120,14 1300,66 1420,38
          "
          fill="none"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs tracking-[0.45em] text-black/50">
            THE ARTIST
          </p>

          <h1 className="font-dancing text-6xl leading-none md:text-8xl">
            {siteContent.aboutTitle}
          </h1>

          <div className="mx-auto mt-7 h-px w-20 bg-black" />

          <p className="mx-auto mt-6 max-w-lg text-sm italic leading-relaxed text-black/60">
            Exploring color, expression, texture, and the stories found
            within every subject.
          </p>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[180px_1fr]">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm tracking-[0.3em] text-black/40">
              BIO
            </p>

            <div className="mt-5 hidden h-40 w-[3px] rounded-full bg-black md:block" />
          </div>



          <div className="relative border-l-4 border-black bg-neutral-50 px-8 py-10 md:px-12 md:py-14">
            <span
              className="absolute -top-10 left-5 font-serif text-[9rem] leading-none text-black/10"
              aria-hidden="true"
            >
              “
            </span>

            <p className="relative max-w-3xl text-lg leading-9 text-black/80 md:text-xl">
              {siteContent.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;