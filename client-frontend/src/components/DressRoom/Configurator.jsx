import {
  SkinClors,
  hairClors,
  backgroundImg,
  useCustomization,
} from "../../context/Customization";

const Configurator = () => {
  const { skinColor, setskinColor, hairColor, sethairColor, back, setBack } =
    useCustomization();
  //console.log('material',material);
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
        {/* <div className="configurator_section_title">Dress material</div>
        <div className="configurator_section_values">
          <div
            className={`item ${
              material === "Frabric 01" ? "item--active" : ""
            }`}
            onClick={() => setMaterial("Frabric 01")}
          >
            <div className="item_labal">Frabric 01</div>
          </div>
          <div
            className={`item ${
              material === "Frabric 02" ? "item--active" : ""
            }`}
            onClick={() => setMaterial("Frabric 02")}
          >
            <div className="item_labal">Frabric 02</div>
          </div>
        </div> */}
        {/* <div className="configurator_section">
                <div className="configurator_section_title">
                    Cloth ON/OFF
                </div>
                <div className="configurator_section_values">
                <div className={`item ${material === 1 ? "item--active":""}`} onClick={()=> setLeges(1)  }>
                    <div className="item_labal">
                        ON
                    </div>
                </div>
                <div className={`item ${material === 2 ? "item--active":""}`} onClick={()=>setLeges(2)}>
                    <div className="item_labal">
                        OFF
                    </div>
                </div>
            </div>
            </div> */}
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

export default Configurator;
