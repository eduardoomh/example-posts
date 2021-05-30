import {useEffect, useState} from "react";
import useWindowSize from "hooks/useWindowSize";

export default function useMovil(){
    const [movil, setMovil] = useState();
    const [desktop, setDesktop] = useState();
    const [tablet, setTablet] = useState();
    const {width} = useWindowSize();

    useEffect(() => {
        if(width < 600){
            setMovil(true)
        }else{
            setMovil(false)
        }
    },[width])

    useEffect(() => {
        if(width > 1000){
            setDesktop(true)
        }else{
            setDesktop(false)
        }
    },[width])

    useEffect(() => {
        if(width >= 600){
            setTablet(true)
        }else{
            setTablet(false)
        }
    },[width])
    
    return {movil, tablet, desktop}
}