import React from 'react';
import { Div } from './StylesComponent'
const TemplateComponent = (props) => {
    return (
        <Div>{props.children}</Div>
    )
}
export default TemplateComponent;