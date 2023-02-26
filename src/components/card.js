import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ singlepostdata }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345,bgcolor:'#30c9c7' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="./logo192.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    id:{singlepostdata.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    title:{singlepostdata.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    content:{singlepostdata.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate('/')}>Back</Button>
            </CardActions>
        </Card>
    );
}