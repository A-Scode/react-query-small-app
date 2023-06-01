import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import "./Home.scss";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../constants";
import { connect, useSelector } from "react-redux";
import { Dispatch, Func1, Store, bindActionCreators } from "@reduxjs/toolkit";
import { storeCommits } from "../../redux-store/action";
import dayjs from "dayjs";
import DatePicker, { Calendar } from "react-multi-date-picker";



type props = {
    storeCommit: Func1<any , any> , 
    commits : Array<any>,
}

const Repo:FC<props> = (props:props)=>{

    const {repo_name} = useParams();

    const commitsQuery = useQuery({
        queryKey : ["commits" , repo_name],
        queryFn : async ()=> await api.get(`/repos/a-scode/${repo_name}/commits`).then(
            res=>{
                let commitsDates:Array<any> = [];
                res.data.map((item:any)=>{
                    if (item.commit.committer.name === "A-Scode") commitsDates.push(new Date(item.commit.committer.date))
                })
                console.log(commitsDates)
                props.storeCommit(commitsDates);
                return res.data
            }
        )
    })


    const mq = useMediaQuery("(width < 800px)")



    return (
        <Box className="container">
            <Typography variant="h3">{repo_name}</Typography>
            <Box className="repo_details">
                <Calendar
                multiple
                value={props.commits}
                numberOfMonths={mq?1:3}
                
                />
            </Box>
        </Box>
    )
}


const mapStateToProps = (store:any)=>{
    return {
        commits : store.commits
    }
}

const mapDispatchToProps = (dispatch:Dispatch)=>{
    return {
        storeCommit : bindActionCreators(storeCommits , dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Repo);