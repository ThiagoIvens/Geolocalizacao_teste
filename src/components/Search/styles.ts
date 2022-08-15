import styled from "styled-components";

export const SearchContainer = styled.div`


    display: flex;
    justify-content: center;
    flex-direction: column;

    h1, span {
        color: var(--white-blue-300);
        text-align: center;
    }

    span a {
        text-decoration: none;
        color: var(--white-blue-300);
        cursor: pointer;
    }

    div {
        padding-block: 1.5rem;

        input {
            color: #FFF;
            font-size: 20px;
            border: 1px solid rgba(255,255,255,.3);
            padding: 10px 40px;
            border-radius: .3rem 0px 0px .3rem;
            background: transparent;
            width: 75%;
        }

        input::placeholder {
            color: #f7f7f7;
        }

        input:focus {
            outline:none !important;
        }

        button {
            cursor: pointer;
            color: #FFF;
            font-size: 20px;
            padding: 10px 40px;
            border-radius: 0px .3rem .3rem 0px;
            background: rgba(255,255,255,.3);
            border: 1px solid rgba(255,255,255,.3);
            backdrop-filter:  blur(10px);
            width: 25%;
        }

        @media (max-width: 425px) {
            input {
                width: 100%;
                font-size: 20px;
                border: none;
                padding: 10px 40px;
                background-color: var(--back-color);
                border-radius: 20px 20px 0px 0px;
                background: linear-gradient(145deg, #dfe8fe, #bbc3d5);
                box-shadow:  5px 1px 10px #5e626b,
                            -5px -5px 10px #ffffff;
                transition: box-shadow .25s ease !important;
            }

            input:focus {
                outline:none !important;
            }

            button {
                width: 100%;
                cursor: pointer;
                color: var(--white-blue-300);
                font-size: 20px;
                border: none;
                padding: 10px 40px;
                background-color: var(--back-color);
                border-radius: 0px 0px 20px 20px;
                background: linear-gradient(145deg, #dfe8fe, #bbc3d5);
                    box-shadow:  5px 5px 10px #5e626b,
                                -5px 5px 10px #ffffff;
                transition: box-shadow .25s ease !important;
            }
        }
    }
    @media (max-width: 425px) {
        padding: 2.5rem;
    }
`;