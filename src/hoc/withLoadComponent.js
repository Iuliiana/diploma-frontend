import React from 'react';
import Section from "../ui/Section";
import Loader from "../ui/loaders/Loader";


export default function withLoadComponent(WrappedComponent) {
    class LoadComponent extends React.Component {
        render() {
            if (this.props.load === true) {
                return <Section><Loader/></Section>;
            }
            if (this.props.load === false) {
                return <Section sectionClassName={this.props.sectionClassName} sectionTitle={this.props.sectionTitle}>
                    <WrappedComponent {...this.props}/>
                </Section>;
            }

            return <WrappedComponent {...this.props}/>
        }
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    LoadComponent.displayName = `LoadComponent(${wrappedComponentName})`;
    return LoadComponent;
}
