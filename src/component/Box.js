import React from "react";

const Box = (props) => {
  const getBorderColor = () => {
    if (props.result === "WIN") return "green";
    else if (props.result === "LOSE") return "red";
    else return "black";
  };

  return (
    <div
      className="box"
      style={{
        border: `5px solid ${getBorderColor()}`,
      }}
    >
      {props.item ? (
        <>
          <h1
            style={{
              color: `${getBorderColor()}`,
            }}
          >
            {props.title}
          </h1>
          <img
            className="item-img"
            src={props.item && props.item.img}
            alt={props.item.name}
          />
        </>
      ) : (
        <h1>{props.title}</h1>
      )}
      <h2
        style={{
          color: `${getBorderColor()}`,
        }}
      >
        {props.result}
      </h2>
    </div>
  );
};

export default Box;
