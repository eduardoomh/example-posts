import styled from "styled-components";

export const FormContainer = styled.form`
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 1rem;
        padding: 1rem 0;

        input, textarea, select{
            width: 80vw;
        }

        input{
            height: 1.8rem;
        }

        select{
            height: 2rem;
        }

        textarea{
            height: 6rem;
        }

        label{
            font-size: 1.3rem;
            padding: .4rem 0;        
        }
    }
`;