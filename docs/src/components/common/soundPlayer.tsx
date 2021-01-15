import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sound1 from '../../audio/blind.mp3';
import sound2 from '../../audio/break.mp3';
import breaking from '../../image/break.jpg';
import blind from '../../image/blind.jpg';

interface SoundPlayerProps {
    onClick: () => void,
    corX: number,
    corY: number
}

const useStyles = makeStyles({
    root: {
        zIndex:95,
        position: "fixed",
        transition: "top .5s ease-in-out, left .5s ease-in-out"
    },
    media: {
    height: 140,
    },
    cc: {
        padding: 0
    },
    audio: {
        zIndex:100
    }
});

const SoundPlayer: React.FunctionComponent<SoundPlayerProps> = (props) => {
    /**
     * props
     */
    const { onClick, corX, corY } = props;

    /**
     * states
     */
    const [sound, setSound]: any = useState(sound1);
    const [img, setImg]: any = useState(blind);
    /**
     * variables
     */
    const classes = useStyles();

    /**
     * useEffect
     */
    useEffect(() => {

    })

    /**
     * methods
     */

        return(
            <Card 
                onMouseDown={onClick} 
                style={{top: corY - 20, left: corX - 20}} 
                className={classes.root}>
            <CardActionArea>
             {sound &&
             <>
             <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.cc}>
              <AudioPlayer
                    className={classes.audio}
                    autoPlay
                    src={sound}
                    onEnded={()=> {
                        if (img === blind) {
                            setImg(breaking);
                            setSound(sound2);
                        } else {
                            setImg(blind);
                            setSound(sound1);
                        }
                    }}
                />
              </CardContent>
              </>}
            </CardActionArea>
          </Card>
        )
}


export default SoundPlayer;