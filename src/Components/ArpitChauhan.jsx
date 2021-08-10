import { Box, makeStyles,Typography } from '@material-ui/core';
import Youtube from '../Assets/images/youtube.jpg'
import Instatele from '../Assets/images/Instatele.jpg'
//import { height } from '@material-ui/system';

const useStyle = makeStyles({
    image: {
        width: '49%',
        //height: '59%'
    },
    component: {
        margin: 50
    }
})

const ArpitChauhan = () =>{
    const classes = useStyle();
    return(
    <Box className={classes.component}>
        <Typography variant="h4" style={{marginBottom: 50}}> Arpit Chuahan GitHub</Typography>
       <Box style={{display: 'flex'}}>
           <img className={classes.image} src={Youtube} />
           <img className={classes.image} src={Instatele} />
       </Box>
    </Box>
    )
}
export default ArpitChauhan;