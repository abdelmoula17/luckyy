import React, { Fragment, Component } from "react";
import "./password-input.css";

const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};
const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};
const strengthColor = (count) => {
  if (count < 2) return "red";
  if (count < 3) return "red";
  if (count < 4) return "yellow";
  if (count < 5) return "yellow";
  if (count < 6) return "green";
};
const strengthIndicator = (value) => {
  let strengths = 0;
  if (value.length > 5) strengths++;
  if (value.length > 7) strengths++;
  if (hasNumber(value)) strengths++;
  if (hasSpecial(value)) strengths++;
  if (hasMixed(value)) strengths++;
  return strengths;
};

class PasswordInput extends Component {
  static defaultProps = {
    value: "",
    onChange: () => {},
    inputClassName: "passwowrd-input",
    placeholder: "",
    disabled: false,
    statusClassName: "status-style",
    passwordStrength: () => {},
    strengthStyle: {},
    type: "text",
  };
  constructor(props) {
    super(props);
    this.state = {
      weak: false,
      fair: false,
      strong: false,
    };
  }

  resetState = () => {
    this.setState({
      weak: false,
      fair: false,
      strong: false,
    });
    this.props.passwordStrength("none");
    return;
  };
  handleColorChange = (e) => {
    let strength = strengthIndicator(this.props.value);
    let color = strengthColor(strength);
    this.props.onChange(e);
    if (color === "red") {
      if (e.target.value === "") return this.resetState();
      this.setState({
        weak: true,
        fair: false,
        strong: false,
      });
      this.props.passwordStrength("weak");
    }
    if (color === "yellow") {
      if (e.target.value === "") return this.resetState();
      this.setState({
        weak: false,
        fair: true,
        strong: false,
      });
      this.props.passwordStrength("fair");
    }
    if (color === "green") {
      if (e.target.value === "") return this.resetState();
      this.setState({
        weak: false,
        fair: false,
        strong: true,
      });
      this.props.passwordStrength("strong");
    }
  };
  render() {
    const { weak, fair, strong } = this.state;
    return (
      <Fragment>
        <div className="password-container">
          <input
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={(e) => this.handleColorChange(e)}
            className="bg-[#F0F3F5] px-5 py-2 rounded-md w-full"
            disabled={this.props.disabled}
          />
          <span
            className={this.props.statusClassName}
            style={
              weak
                ? { color: "#DF2222" }
                : fair
                ? { color: "#FFB660" }
                : strong
                ? { color: "#3CB170" }
                : {}
            }
          >
            {weak ? "Weak" : fair ? "Fair" : strong ? "Strong" : ""}{" "}
          </span>
        </div>
        <div style={this.props.strengthStyle} className="meter-container">
          <div
            className={`${
              weak
                ? "col-4 red-indicator"
                : fair
                ? "col-4 fair-indicator"
                : strong
                ? "col-4 strong-indicator"
                : "col-4 gray-indicator"
            }`}
          />
          <div
            className={`${
              fair
                ? "col-4 fair-indicator"
                : strong
                ? "col-4 strong-indicator"
                : "col-4 gray-indicator"
            }`}
          />
          <div
            className={`${
              strong ? "col-4 strong-indicator" : "col-4 gray-indicator"
            }`}
          />
        </div>
      </Fragment>
    );
  }
}

export default PasswordInput;
