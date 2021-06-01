import React from 'react';

const About = ({match}) => {
    return (
        <div>
            About  {match.params.name}
        </div>
    );
};

export default About;