import { useState } from 'react';

const AboutMe = () => {

    return (
        <div class="w-[100vw] pb-30">
            <h1 class="text-center text-2xl pt-22 pb-10">About Me</h1>
            <div class="grid sm:grid-cols-2 place-items-center gap-5">
                <p class="px-10 w-[50%]">picture of my mom</p>
                <p class="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>
            </div>
            
        </div> 
    );
};

export default AboutMe;