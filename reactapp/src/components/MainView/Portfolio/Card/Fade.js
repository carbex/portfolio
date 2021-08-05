import React, { useState, useEffect } from 'react'
import * as S from './Fade.styles'

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

function Fade({visible, children, duration = 300}) {

    const [state, setState] = useState(visible ? VISIBLE : HIDDEN)

    useEffect(() => {
        if(visible) {
            setState(ENTERING)
        } else {
            setState((s) => s === VISIBLE ? LEAVING : HIDDEN)
        }
    }, [visible])

    useEffect(() => {
        if(state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN)
            }, duration)
            return () => {
                clearTimeout(timer)
            }
        } else if (state === ENTERING) {
            const offsetHeight = document.body.offsetHeight; // Force repaint
            setState(VISIBLE);
        }
    }, [state])

    if(state === HIDDEN) {
        return null;
    }

    return (
        <S.Fade visible={state === VISIBLE ? true : false} duration={duration}>
            {children}
        </S.Fade>
    )
}

export default Fade
