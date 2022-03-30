import React, { useState } from "react";
// import { Button } from "../atom/Button/Button";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { UseGetScrollResultProps } from "../../hooks/useGetScroll";

export type HeaderProps = HeaderReciveProps & UseGetScrollResultProps;

type HeaderReciveProps = {
  signIn: () => void;
  signUp: () => void;
  onClickGoToHome: () => void;
};
const variants = {
  open: (height = 1500) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 30px) 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 30px) 10px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export function Header(props: HeaderProps) {
  const [isIconClick, setIconClick] = useState<boolean>(false);

  return (
    <div>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 transition duration-500 z-40 transform shadow h-16 ",
          {
            "translate-y-0": isIconClick,
            "bg-white": props.scrollY < 100 && !isIconClick,
            "bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-white hover:bg-opacity-100":
              props.scrollY > 100 &&
              props.scrollDirection == "up" &&
              !isIconClick,
            "bg-white translate-y-0 box-border":
              props.scrollY > 100 &&
              props.scrollDirection == "down" &&
              !isIconClick,
          }
        )}
      >
        <div
          className={classNames(
            "w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform items-center",
            {
              "text-black translate-y-0 box-border":
                isIconClick ||
                (props.scrollY < 100 && props.scrollDirection == "down"),
              "text-gray-300 group-hover:text-black hover:translate-y-0":
                props.scrollY > 100 &&
                props.scrollDirection == "up" &&
                !isIconClick,
            }
          )}
        >
          <div
            className={classNames("cursor-pointer w-52", {
              "bg-opacity-50":
                props.scrollY > 100 &&
                props.scrollDirection == "up" &&
                !isIconClick,
            })}
          ></div>

          <a
            className={classNames(
              "cursor-pointer menu-trigger type12 transform translate-y-3 mr-2 sm:mr-6 z-50",
              {
                "active-12": isIconClick,
                "": !isIconClick,
              }
            )}
            // href="#"
            onClick={() => {
              setIconClick(!isIconClick);
            }}
          >
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick,
              })}
            ></span>
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick,
              })}
            ></span>
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick,
              })}
            ></span>
          </a>
        </div>
      </nav>
      <motion.nav initial={false} animate={isIconClick ? "open" : "closed"}>
        <motion.div
          className={classNames(
            "fixed bg-black w-screen h-screen z-30 transition z-30 transform",
            {
              "translate-y-0 -right-0": isIconClick,
              "bg-opacity-50 -translate-y-24 hover:translate-y-0 hover:bg-opacity-100 h-100vh":
                props.scrollY > 100 &&
                props.scrollDirection == "up" &&
                !isIconClick,
              "-translate-y-24 box-border h-110vh ":
                props.scrollY > 100 &&
                props.scrollDirection == "down" &&
                !isIconClick,
            }
          )}
          variants={variants}
        >
          {isIconClick && (
            <div className="mt-20 text-white">
              <div className="ml-32 flex flex-col">
                <Fade duration={1000} delay={300} bottom>
                  <span className="text-7xl mt-36 mb-28 transition delay-150 hover:underline">
                    Hello
                  </span>
                </Fade>
                <Fade duration={1000} delay={350} bottom>
                  <span className="text-7xl transition delay-150 hover:underline">
                    World
                  </span>
                </Fade>
              </div>
            </div>
          )}
        </motion.div>
      </motion.nav>
    </div>

    // <nav className="w-screen h-12 shadow-sm ">
    //   <div className="flex justify-between items-center">
    //     <div
    //       onClick={(ev) => {
    //         ev.preventDefault();
    //         props.onClickGoToHome();
    //       }}
    //     >
    //       Logo
    //       <img src="" alt=""></img>
    //     </div>

    //     <div className="flex flex-row mr-10">
    //       <div className="mr-4">
    //         <Button size="medium"
    //               type="button"
    //               color="gray"
    //               onClick={(ev) => {
    //                 ev.preventDefault();
    //                 props.signIn();
    //               }}>
    //           Sign In
    //         </Button>

    //       </div>
    //       <div className="mr-4">
    //         <button
    //           onClick={(ev) => {
    //             ev.preventDefault();
    //             props.signUp();
    //           }}
    //         >
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
