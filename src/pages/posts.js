import React,{useEffect, useState} from "react";
import Layout from "../components/layout";
import UserTable from "../components/table";
import { Postsdata } from "../api/api";
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { Typography } from "@mui/material";

const Posts = () => {
    const [filterdata,setfilterdata] = useState([]);
    const [allposts,setallposts] = useState([]);
    const [searchvalue, setsearchvalue] = useState("");

    useEffect(()=>{
        Postsdata()
        .then((res)=>{
            setallposts(res)
        })
    },[])   
    console.log('allposts',allposts);



    useEffect(()=>{
        if(searchvalue) {
            let searchresult = allposts.filter(item =>
                (item.title?.toLowerCase().includes(searchvalue.toLowerCase()))
                    || (item.body?.toLowerCase().includes(searchvalue.toLowerCase())) 
                )
                setfilterdata(searchresult)
        }
        else {
            setfilterdata(allposts)
        }

    },[searchvalue,allposts ])


    return (
        <>
        <Layout>
       <Grid container sx={{ justifyContent: 'space-between' }}>
        <Grid >
          <Typography variant="body">POSTS</Typography>
        </Grid>
        <Grid item mb={5}>
            <TextField
              size='small'
              placeholder='Search'
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'></InputAdornment>
                )
              }}
              onChange={(e) => {
                setsearchvalue(e.target.value)
              }}
            />
  
        </Grid>
        <UserTable filterdata={filterdata}/>
      </Grid>
        </Layout>
        </>
    )

}
export default Posts;