import React from 'react';

const Section = ({sectionClassName, sectionTitle, children}) => {
    return (
        <section className={sectionClassName}>
            <h2 className="text-center">{sectionTitle}</h2>
            {children}
        </section>
    );
};

export default Section;