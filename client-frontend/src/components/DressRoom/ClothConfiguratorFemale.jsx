import { useCustomizationFemale } from "../../context/CustomizationFemale";
import '../../pages/DressingRoom/ColothConfigurator.css' 

const ClothConfiguratorFemale = () => {
  const {
    Up,
    setUp,
    Down,
    setDown,
    Shartcolor,
    setShartcolor,
    NightDresscolor,
    setNightDress,
    Shortcolor,
    setShortcolor,
    YukatacolorA,
    setYukatacolorA,
    YukatacolorB,
    setYukatacolorB,
    YukatacolorC,
    setYukatacolorC
  } = useCustomizationFemale();

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">kebaya Inner</h5>
              <div
                class="item ${Down === 1 ? 'item--active' : ''}"
                onClick={() => setDown(1)}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">kebaya Outer</h5>
              <div
                class="item ${Up === 1 ? 'item--active' : ''}"
                onClick={() => setUp(1)}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Shirt</h5>
              <p>
                <label for="exampleColorInput" class="form-label">
                  Color picker
                </label>
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  value={Shartcolor}
                  onChange={(e) => setShartcolor(e.target.value)}
                  title="Choose your color"
                />
              </p>
              <div
                class="item ${Up === 4 ? 'item--active' : ''}"
                onClick={() => setUp(4)}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Yukata</h5>
              <p>
                <table border={0} cellPadding={"10px"}>
                  <th>
                    <label for="exampleColorInput" class="form-label">
                      Color A picker
                    </label>
                    <input
                      type="color"
                      class="form-control form-control-color"
                      id="exampleColorInput"
                      value={YukatacolorA}
                      onChange={(e) => set(e.target.value)}
                      title="Choose your color"
                    />
                  </th>
                  <th>
                    <label for="exampleColorInput" class="form-label">
                      Color B picker
                    </label>
                    <input
                      type="color"
                      class="form-control form-control-color"
                      id="exampleColorInput"
                      value={YukatacolorB}
                      onChange={(e) => setYukatacolorB(e.target.value)}
                      title="Choose your color"
                    />
                  </th>
                  <th>
                    <label for="exampleColorInput" class="form-label">
                      Color C picker
                    </label>
                    <input
                      type="color"
                      class="form-control form-control-color"
                      id="exampleColorInput"
                      value={YukatacolorC}
                      onChange={(e) => setYukatacolorC(e.target.value)}
                      title="Choose your color"
                    />
                  </th>
                </table>
              </p>
              <div
                class="item ${Up === 2 ? 'item--active' : ''}"
                onClick={() => {
                  setUp(2);
                  setDown(0);
                }}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Night Dress</h5>
              <p>
                <label for="exampleColorInput" class="form-label">
                  Color picker
                </label>
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  value={NightDresscolor}
                  onChange={(e) => setNightDress(e.target.value)}
                  title="Choose your color"
                />
              </p>
              <div
                class="item ${Up === 3 ? 'item--active' : ''}"
                onClick={() => {
                  setUp(3);
                  setDown(0);
                }}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Short</h5>
              <p>
                <label for="exampleColorInput" class="form-label">
                  Color picker
                </label>
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  value={Shortcolor}
                  onChange={(e) => setShortcolor(e.target.value)}
                  title="Choose your color"
                />
              </p>
              <div
                class="item ${Down === 2 ? 'item--active' : ''}"
                onClick={() => setDown(2)}
              >
                <a href="#" class="btn btn-primary">
                  Cheng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothConfiguratorFemale;
