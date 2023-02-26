import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { SinglePostsdata } from "../api/api";
import PostCard from "../components/card";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Post = () => {
    const [singlepostdata, setsinglepostdata] = useState({});
    const paramid = useParams()

    useEffect(() => {
        SinglePostsdata(paramid.id)
            .then((res) => setsinglepostdata(res))
    }, [paramid])
    console.log('singlepostdata', singlepostdata)


    return (
        <>
            <Layout>
                <Typography variant="h4">Single Post</Typography>
                <Stack sx={{ position: 'fixed', top: '30%', left: '40%' }}>
                    <PostCard singlepostdata={singlepostdata} />
                </Stack>

            </Layout>
        </>
    )

}

export default Post