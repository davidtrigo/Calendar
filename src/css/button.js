import {css} from 'lit-element';
export const button = css`
    button {
        background-color: black;
        border:none;
        width: 100%;
        height: 100%;
    }
    button:active {
        outline: none;
        border: none;
    }
        
    button:focus {outline:0;}

    i{

        border: solid gray;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 5px;
    }
    button:hover>i{
        border: solid white;
        border-width: 0 3px 3px 0;
    }

    .previous{
        margin-top: 10px;
        transform: rotate(-135deg);
    }
    .next{
        transform: rotate(45deg);
    }
`
