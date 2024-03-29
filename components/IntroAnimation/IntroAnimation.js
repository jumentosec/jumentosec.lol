import React, { useState, useEffect } from "react";
import TyperWriter from "../TypeWriter/TypeWriter";
import classNames from "classnames";
import styles from "./IntroAnimation.module.css";

export default function IntroAnimation({ fadeOutAfter = 100 }) {
    const [ isFaded, setIsFaded ] = useState(false);

    const text = 'provisioning instance...';

    useEffect(() => {
      setTimeout(() => {
        setIsFaded(true);
      }, fadeOutAfter);
    }, [isFaded, fadeOutAfter]);

    const twClasses = classNames(
      styles.container,
      styles.fading,
      {
        [styles.hide]: isFaded,
      },
    );

    return (
        <div className={twClasses}>
          <TyperWriter text={text} />
        </div>
    )
}