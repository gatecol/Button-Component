import React from "react";
import './Button.css';

class Button extends React.Component {
    render() {
        const { variant = 'default',
                disableShadow = false,
                disabled = false,
                startIcon = '',
                endIcon = '',
                size = 'md',
                color = 'default',
              } = this.props;

        const startIconI = <i className={`bi ${startIcon} startIconStyle`}></i>
        const endIconI = <i className={`bi ${endIcon} endIconStyle`}></i>

        return <button className={
            `baseButton 
            ${variant}
            ${size}
            ${disableShadow ? "disableShadow" : ""}
            ${disabled && variant !== "text" ? "disable" : ""}
            ${disabled && variant === "text" ? "disableText" : ""}
            ${color}
            `
        }>{startIcon ? startIconI : null}Default{endIcon ? endIconI : null}</button>
    }
}

export default Button;