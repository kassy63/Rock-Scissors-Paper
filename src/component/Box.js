import React, { Component } from "react";

class Box extends Component {
  getBorderColor = () => {
    const { result } = this.props;
    if (result === "WIN") return "green";
    else if (result === "LOSE") return "red";
    else return "black";
  };

  render() {
    const { title, item, result } = this.props;
    const borderColor = this.getBorderColor();

    return (
      <div
        className="box"
        style={{
          border: `5px solid ${borderColor}`,
        }}
      >
        {item ? (
          <>
            <h1
              style={{
                color: borderColor,
              }}
            >
              {title}
            </h1>
            <img className="item-img" src={item.img} alt={item.name} />
          </>
        ) : (
          <h1>{title}</h1>
        )}
        <h2
          style={{
            color: borderColor,
          }}
        >
          {result}
        </h2>
      </div>
    );
  }
}

export default Box;
