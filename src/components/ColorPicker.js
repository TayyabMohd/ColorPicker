import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    // setShowColorList(false);
  };

  const toggleList = () => {
    setShowColorList(!showColorList);
  };

  const bgscreen = {
    backgroundColor: selectedColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    minHeight: "80vh",
  };

  const buttonPick = {
    height: "50px",
    width: "100px",
  };

  return (
    <div className="color-picker" style={bgscreen}>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{
                height: "50px",
                width: "50px",
                marginLeft: "10px",

                backgroundColor: color,
                border: "5px black solid",
                borderRadius: "10px",
              }}
              onClick={() => handleColorSelection(color)}
            ></button>
          ))}
        </ul>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button style={buttonPick} onClick={toggleList}>
          Pick a Color
        </button>
      </div>
      {selectedColor && (
        <div className="selected-color">
          <span>Selected Color: {selectedColor}</span>
          <div
            className="color-box"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
