import styled from "styled-components";

export const FormContainer = styled.form`
    width: 90vw;
    margin: auto;

    @media (min-width: 700px){
        max-width: 700px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 1rem;
        padding: 1rem 0;

        input, textarea, select{
            width: 80vw;

            @media (min-width: 800px){
                min-width: 650px;
                max-width: 650px;
                padding: .3rem;
            }
        }

        input{
            height: 1.8rem;
        }

        select{
            height: 2rem;
        }

        textarea{
            height: 5rem;
        }

        label{
            font-size: 1.3rem;
            padding: .4rem 0;        
        }
    }
`;