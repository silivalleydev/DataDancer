import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
import { HighlightedMarkdown } from '../common/highlightMarkdown';
import { LanguageCode } from '../type/defineType';
import DataDancer from 'datadancer';

interface LandingDetailProps {
}



const useStyles = makeStyles({
    root: {
    },
    paper: {
        margin: '30px 0 0 40px',
        padding: 30,
        width: 410,
        height: 380
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
     * const
     */
    const classes = useStyles();
    const langType = [
        LanguageCode.chinese, 
        LanguageCode.english,
        LanguageCode.german,
        LanguageCode.hindi,
        LanguageCode.india,
        LanguageCode.japanese,
        LanguageCode.korean
    ];
    /**
     * states
     */
    const [d, setD]:any = useState();
    const [, setDate] = useState(new Date());
    const num = DataDancer.NumberMethods.prototype.getRanRangeNum(24, 32);
    const ranType1 = langType[DataDancer.NumberMethods.prototype.getRanRangeNum(0, langType.length - 1)];
    const ranType2 = langType[DataDancer.NumberMethods.prototype.getRanRangeNum(0, langType.length - 1)];
    const ranType3 = langType[DataDancer.NumberMethods.prototype.getRanRangeNum(0, langType.length - 1)];
    /**
     * useEffect
     */
    useEffect(() => {
        if (!d) setD({
            a: new DataDancer.ArrayMethods(),
            n: new DataDancer.NumberMethods(),
            s: new DataDancer.StringMethods(),
            d: new DataDancer.DateMethods(),
            v: new DataDancer.VisualMethods(),
        })

        const interval = setInterval(() => getDate(), 2000);
        return () => clearInterval(interval);
    })



    const contents = [{
        id: 0,
        title: "Get Random Name By country!",
        code:`\`\`\`
const d = new DataDancer.StringMethods();
d.nameGenerator("${ranType1}");
d.nameGenerator("${ranType2}");
d.nameGenerator("${ranType3}");
\`\`\`
            `,
        exec: function() {
            const arr = [];
            if(d){
                arr.push({title: `d.nameGenerator("${ranType1}")`, rs: d.s.nameGenerator(ranType1)});
                arr.push({title: `d.nameGenerator("${ranType2}")`, rs: d.s.nameGenerator(ranType2)});
                arr.push({title: `d.nameGenerator("${ranType3}")`, rs: d.s.nameGenerator(ranType3)});
            }
                return arr;
        }
    },  {
        id: 1,
        title: "Easy to Control Date",
        code: `\`\`\`
const d = new DataDancer.DateMethods();
const date = new Date(2020, 0, ${num}); // 2020-01-${num - 1}

d.addMonths(date, 1);
d.getFormDate(date, "-");
d.getDayOfWeek(date);
d.getDayOfWeek(date, "${ranType1}");
\`\`\``,
        exec: function() {
            const arr = [];
            const date = new Date(2020, 0, num);
            if (d) {
                arr.push({title: 'd.addMonths(date, 1)', rs: d.d.addMonths(date, 1)});
                arr.push({title: 'd.getFormDate(date, "-")', rs: d.d.getFormDate(date, "-")});
                arr.push({title: `d.getDayOfWeek(date, "${ranType1}")`, rs: d.d.getDayOfWeek(date, ranType1) });
            }

            return arr;
        }
    }, 
    {
        id: 2,
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
    }, 
    {
        id: 3,
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
    },{
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