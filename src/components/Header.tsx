import { FC } from "react";
import Typography from '@mui/material/Typography';

// interface Props {
//     children : JSX.Element
// }

type Props ={
    children : any,
};

const Header:FC< Props> = (props : Props):JSX.Element =>{
    return (
        <header>
            <Typography variant="h2"> {props.children} </Typography>
        </header>
    )
}

export default Header;