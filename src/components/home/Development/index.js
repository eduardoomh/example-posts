import React from "react";
import {List, Li} from "./styles";

export default function Development(){
    return(
        <List>
            <Li>
                <img 
                    src="https://jesusmh.s3.us-east-2.amazonaws.com/tecnologias/reactjs.svg" 
                    alt="react js"
                    width={90}
                    height={90}
                    />
                <p>React Js</p>
            </Li>
            <Li>
                <img 
                    src="https://jesusmh.s3.us-east-2.amazonaws.com/tecnologias/styledcomponents.svg" 
                    alt="styled components"
                    width={90}
                    height={90}
                    />
                <p>Styled <br />Components</p>
            </Li>
        </List>
    )
}