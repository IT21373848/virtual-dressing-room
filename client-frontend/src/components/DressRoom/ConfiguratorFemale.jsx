import {
  SkinClors,
  hairClors,
  backgroundImg,
  useCustomizationFemale,
} from "../../context/CustomizationFemale";

const ConfiguratorFemale = () => {
  const { skinColor, setskinColor, hairColor, sethairColor, back, setBack, hairType, sethairType, } =
  useCustomizationFemale();
  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Skin Color</div>
        <div className="configurator_section_values">
          {SkinClors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === skinColor ? "item--active" : ""
              }`}
              onClick={() => setskinColor(item.color)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              {/* <div className="item_label">
                      {item.name}
                  </div> */}
            </div>
          ))}
        </div>
        <div className="configurator_section_title">Hair Color</div>
        <div className="configurator_section_values">
          {hairClors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === hairColor ? "item--active" : ""
              }`}
              onClick={() => sethairColor(item.color)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              {/* <div className="item_label">
                      {item.name}
                  </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
                <div className="configurator_section_title">
                    Hair Type
                </div>
                <div className="configurator_section_values">
                <div className={`item ${hairType === 1 ? "item--active":""}`} onClick={()=> sethairType(1)  }>
                    <div className="item_labal">
                        Type A
                    </div>
                </div>
                {/* <div className={`item ${hairType === 2 ? "item--active":""}`} onClick={()=> sethairType(2)  }>
                    <div className="item_labal">
                        Type B
                    </div>
                </div> */}
                <div className={`item ${hairType === 3 ? "item--active":""}`} onClick={()=> sethairType(3)  }>
                    <div className="item_labal">
                        Type B
                    </div>
                </div>
                <div className={`item ${hairType === 3 ? "item--active":""}`} onClick={()=> sethairType(4)  }>
                    <div className="item_labal">
                        Type C
                    </div>
                </div>
            </div>
            </div>
      <div className="configurator_section">
        <div className="configurator_section">
          <div className="configurator_section_title">Environment</div>
          <div className="configurator_section_values">
            {backgroundImg.map((item, index) => (
              <div
                key={index}
                className={`item ${item.name === back ? "item--active" : ""}`}
                onClick={() => setBack(item.name)}
              >
                <div className="item_label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfiguratorFemale;
