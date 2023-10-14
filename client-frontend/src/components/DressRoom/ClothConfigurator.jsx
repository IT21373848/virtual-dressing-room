import {
  useCustomization,
} from "../../context/Customization";

const ClothConfigurator = () => {
  const {
    material,
    setMaterial,
    materialB,
    setMaterialB,
    setLeges,
  } = useCustomization();

  return (
    <div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Shart A</h5>
            <p class="card-text">
              <div className="configurator_section_title">Dress material</div>
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
              </div>
            </p>
            <div
              className={`item ${material === 1 ? "item--active" : ""}`}
              onClick={() => setLeges(1)}
            >
              <a href="#" class="btn btn-primary">
              Cheng
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Shart B</h5>
            <p class="card-text">
              <div className="configurator_section_title">Dress material</div>
              <div className="configurator_section_values">
                <div
                  className={`item ${
                    materialB === "Frabric 01" ? "item--active" : ""
                  }`}
                  onClick={() => setMaterialB("Frabric 01")}
                >
                  <div className="item_labal">Frabric 01</div>
                </div>
                <div
                  className={`item ${
                    materialB === "Frabric 02" ? "item--active" : ""
                  }`}
                  onClick={() => setMaterialB("Frabric 02")}
                >
                  <div className="item_labal">Frabric 02</div>
                </div>
              </div>
            </p>
            <div
              className={`item ${material === 2 ? "item--active" : ""}`}
              onClick={() => setLeges(2)}
            >
              <a href="#" class="btn btn-primary">
              Cheng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothConfigurator;
