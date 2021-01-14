import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
import { HighlightedMarkdown } from '../common/highlightMarkdown';
import DataDancer, { ArrayMethods, DateMethods, NumberMethods, StringMethods, VisualMethods} from 'datadancer';

interface LandingDetailProps {
}


const useStyles = makeStyles({
    root: {
        userSelect:"none"
    },
    paper: {
        margin: '30px 0 0 40px',
        padding: 30,
        height: 360,
        width: 410,
    },
    title: {
        fontSize:20,
        borderBottom: '1px solid #ffff',
        fontWeight: "bold"
    },
    rsTitle: {
        color:"black", 
        fontWeight: 700, 
        display: "inline-block", 
        marginTop: 30, 
        marginRight: 10
    },
    box: {
        display: "inline-block", 
        position: "relative", 
        marginLeft:20 , 
        top: 20,
        width: 50, 
        height: 50, 
    },
    rs: {
        border:"1px solid black", 
        display: "inline-block",
        borderRadius: 2,
        padding: 3
    }
});

const LandingDetail: React.FunctionComponent<LandingDetailProps> = (props) => {
    /**
     * props
     */
    const { } = props;

    /**
     * states
     */
    const [d, setD]:any = useState();
    const [date, setDate] = useState(new Date);
    
    /**
     * useEffect
     */
    useEffect(() => {
        if (!d) setD({
            a: new DataDancer.ArrayMethods,
            n: new DataDancer.NumberMethods,
            s: new DataDancer.StringMethods,
            d: new DataDancer.DateMethods,
            v: new DataDancer.VisualMethods,
        })

        const interval = setInterval(() => getDate(), 5000)
        return () => clearInterval(interval);
    })

    /**
     * variables
     */
    const classes = useStyles();
    const contents = [{
        id: 0,
        title: "Get Random Name By country!",
        code:`\`\`\`
const d = new DataDancer.StringMethods();
d.nameGenerator("kor");
d.nameGenerator("eng");
d.nameGenerator("jp");
\`\`\`
            `,
        exec: function() {
            const arr = [];
            console.log('s=>', d)
            if(d){
                arr.push({title: 'd.nameGenerator("kor")', rs: d.s.nameGenerator("kor")});
                arr.push({title: 'd.nameGenerator("eng")', rs: d.s.nameGenerator("eng")});
                arr.push({title: 'd.nameGenerator("jp")', rs: d.s.nameGenerator("jp")});
            }
                return arr;
        }
    }, {
        id: 1,
        title: "Get Random Data!",
        code: `\`\`\`
const d = new DataDancer.NumberMethods();
d.getRanDigitNum(3);

const arr = ["Jack", "Wan", "Lee", "Kay"];
const d = new DataDancer.ArrayMethods();
d.getRanElement(arr);
\`\`\`
            `,
        exec: function() {
            const sample = ["Jack", "Wan", "Lee", "Kay"];
            const arr = [];

            if (d) {
                arr.push({title: 'd.getRanDigitNum(3)', rs: d.n.getRanDigitNum(3)});
                arr.push({title: 'd.getRanElement(arr)', rs: d.a.getRanElement(sample)});
            }

            return arr;
        }
    }, {
        id: 2,
        title: "Easy to Object Array Sort & Search",
        code: `\`\`\`
const sample = [
    {id:3, name: "Rick"}, 
    {id:1, name:"Jack"}, 
    {id:2, name:"Lee"}
];
const d = new DataDancer.ArrayMethods();
const sorted = d.quickSort(sample, "id");
d.linearSearch(sorted, "Jack", "name");
\`\`\``,
        exec: function() {
            const arr = [];
            const sample = [{id: 3, name: "Rick"}, {id:1, name:"Jack"}, {id:2, name:"Lee"}];
            if (d) {
                let sorted = d.a.quickSort(sample, "id");
                arr.push({title: 'd.quickSort(sample, "id")', rs: sorted});
                arr.push({title: 'd.linearSearch(sorted, "Jack", "name")', rs: d.a.linearSearch(sorted, "Jack", "name")});
            }

            return arr;
        }
    }, {
        id: 3,
        title: "Easy to Control Date",
        code: `\`\`\`
const d = new DataDancer.DateMethods();
const date = new Date(2020, 0, 32); // 2020-01-31

d.addMonths(date, 1);
d.getFormDate(date, "-");
d.getDayOfWeek(date);
\`\`\``,
        exec: function() {
            const arr = [];
            const date = new Date(2020, 0, 32);
            if (d) {
                arr.push({title: 'd.addMonths(date, 1)', rs: d.d.addMonths(date, 1)});
                arr.push({title: 'd.getFormDate(date, "-")', rs: d.d.getFormDate(date, "-")});
                arr.push({title: 'd.getDayOfWeek(date)', rs: d.d.getDayOfWeek(date)});
            }

            return arr;
        }
    }, {
        id: 4,
        title: "Easy to get Colors",
        code: `\`\`\`
const d = new DataDancer.VisualMethods();

d.colorGenerator();
d.gradientGenerator();
\`\`\``,
        exec: function() {
            const arr = [];
            if (d) {
                arr.push({title: 'd.colorGenerator()', rs: d.v.colorGenerator()});
                arr.push({title: 'd.gradientGenerator()', rs: d.v.gradientGenerator()});
            }
            
            return arr;
        }
    }]

    /**
     * methods
     */
    const getDate = () => {
        setDate(new Date());
    };

    return(
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={0}>
                {contents.map((content, idx) => (
                    <Grid key={content.id} item>
                        <Paper className={classes.paper}>
                            <div className={classes.title}>
                                {content.title}
                            </div>
                                <HighlightedMarkdown>
                                    {content.code}
                                </HighlightedMarkdown>
                                {d && content.exec().map((rs) => {
                                    return (
                                        <div>
                                            <span className={classes.rsTitle}>{rs.title + ' => '}</span>
                                            <span className={classes.rs}>{JSON.stringify(rs.rs)}</span>
                                            {idx === contents.length -1 && 
                                                <div className={classes.box} style={{background: rs.rs}}>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default React.memo(LandingDetail);