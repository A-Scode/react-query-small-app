import React, { FC, useEffect } from "react";
import Header from "../components/Header";
import { Box, Chip, CircularProgress, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../constants";
import StarIcon from '@mui/icons-material/Star';
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./Home.scss"
import * as action from "../../redux-store/action" ;
import { Dispatch, Func1, bindActionCreators } from "@reduxjs/toolkit";
import { connect, useSelector } from "react-redux";

 type props  = {
    storeRepo : Func1<any , any>,
    repos : Array<any>
 };

const Home:FC<props> = (props:props) =>{

    useSelector(state=>console.log(state))

    const reposQuery = useQuery( {
        queryKey : ['repos'],
        queryFn : async ()=> await api.get("/users/a-scode/repos?sort=created" ).then(
            (res:any)=>{
                props.storeRepo(res.data);
                return res.data;
            }
        )
    });

    const navigate:NavigateFunction = useNavigate();

    return (
        <Box className = "container">
            <Header>List of Repos</Header>

            <Box>
                <List style={{maxWidth:400}}>
                    {!reposQuery.isLoading?
                    props.repos.map((item:any , index:Number)=>(
                        <ListItemButton key={index} onClick={()=>navigate(`./repo/${item.name}`)}>
                            <ListItem  >
                                <StarIcon />
                                &nbsp; {item.name}
                            </ListItem>
                        <Chip label = {item.private? "Private" : "Public"} variant="outlined" />
                        </ListItemButton>
                    ))
                    :reposQuery.isError?
                    <Typography variant="h4">Error occured.</Typography>
                    : <CircularProgress sx={{position:"fixed" , top:"50%" , left:"50%"}} />}
                </List>
            </Box>

        </Box>
    )
}

const mapDispatchToProps = (dispatch : Dispatch)=>{
    return {
        storeRepo : bindActionCreators(action.storeRepo  , dispatch)
    }
}

const mapStateToProps = (store:any) =>{
    return {
        repos : store.repos,
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(Home);