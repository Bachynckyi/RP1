import { useEffect } from "react";
import ColorPickerItem from "./ColorPickerItem";

const colors = [
    {   
        "id": "1",
        "color": "#FF0000"
    },
    {   
        "id": "2",
        "color": "#0000ff"
    }
];

const ColorPicker = () => {
    const elements = colors.map(({ id, ...props}) => {
        return (
          <ColorPickerItem key={id} {...props} />
        );
      })

      useEffect(() => {
        console.log(elements)
    })

    return (
        <ul>
            {elements}
        </ul>
    );
  };
  
export default ColorPicker;


