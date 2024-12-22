import {cn} from "@/libs/utils/styles";
import React, {ComponentProps, useState} from "react";
import {BorderBeam} from "./ui/border-beam";

interface ButtonProps extends ComponentProps<"button"> {
}

const Button = ({children, ...res}: ButtonProps) => {
    const [hover, setHover] = useState(false);
    return (

        <button
            {...res}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={cn("relative", res.className)}
            {...res}
        >

            <BorderBeam
                className="w-14 h-14 border-beam rounded-full absolute inset-0 z-[1]"
                borderWidth={2}
                colorFrom="#f5f1ce"
                colorTo="#a6a386"
                duration={2}
                anchor={40}
            />
            <span className="relative z-[2] flex justify-center">{children}</span>
        </button>

    );
};

export default Button;
