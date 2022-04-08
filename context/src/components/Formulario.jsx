import { MARCAS, YEARS, PLANES } from "../constants";


const Formulario = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="disabledSelect" class="form-label">
            Marca
          </label>
          <select id="disabledSelect" class="form-select">
            <option> ---seleccione Marca--- </option>

            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        
        <div class="mb-3">
          <label for="disabledSelect" class="form-label">
            Año
          </label>
          <select id="disabledSelect" class="form-select">
            <option> ---Año--- </option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label for="disabledSelect" class="form-label">
            PLANES
          </label>
          <select id="disabledSelect" class="form-select">
            <option> ---Seleccione Plan--- </option>

            {PLANES.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.nombre}
              </option>
            ))}
          </select>
        </div>
        

        <button type="submit" class="btn btn-primary">
          Cotizar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
