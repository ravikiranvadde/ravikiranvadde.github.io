import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';

import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, logo }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            display: 'flex', // Enable flexbox layout
            justifyContent: 'space-between', // Space out the items
            alignItems: 'center', // Center content vertically
            padding: '10px',
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
        logo: {
            maxWidth: '150px',
            height: 'auto',
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="experience-details">
                    <h6 style={{ color: theme.primary }}>
                        {startYear} - {endYear}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                </div>
                {/* <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div> */}
                <img src={logo} alt={`${company} logo`} className={classes.logo} /> {/* Logo at the extreme right */}
            </div>
        </Fade>
    );
}

export default ExperienceCard;
