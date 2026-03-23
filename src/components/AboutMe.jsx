import { useState } from 'react';

const AboutMe = () => {

return (
    <div className="relative">

        {/* Wavy Top Divider */}
        <svg
        viewBox="0 0 1440 200"
        className="block w-full h-[120px]"
        preserveAspectRatio="none"
        >
        <path
            d="
            M0,120
            C200,200 400,40 600,120
            C800,200 1000,40 1200,120
            C1300,160 1380,140 1440,120
            L1440,0
            L0,0
            Z
            "
            className="fill-bermuda"
        />
        </svg>

        <div className="w-full pb-30 bg-bermuda">
        <h1 className="text-center text-2xl pt-10 pb-10">
            About Me
        </h1>

        <div className="grid sm:grid-cols-2 place-items-center gap-5">
            <p className="px-10 w-[70%]">
            picture of my mom
            </p>

            <p className="w-[70%]">
            My love for painting the face arose after being a makeup artist for 12 years.
            I discovered that the elements of the face create a painting through the colors
            of the skin, eyes, lips, and hair. These features, their colors, along with
            the makeup used alongside them, can create many different feelings on one subject.
            I’ve been using oils and acrylic as a medium for 8 years, and each painting begins
            with a color story in mind before I have chosen a subject. Recently, I’ve had an
            interest in painting vases and flowers, using the pallet knife to create unique
            textures in each piece.
            </p>
        </div>
        </div>

    </div>
    );
};

export default AboutMe;