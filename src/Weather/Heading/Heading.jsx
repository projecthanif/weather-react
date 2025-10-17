import locations from "../../config/state";

function Heading({ data, setPlace }) {
  return (
    <div className="heading">
      <div className="place">
        <section className="heading-title">
          {`${data.location.country}, ${data.location.name}`}
        </section>
        <section className="select-place">
          <select
            name="place"
            className="place-select"
            onChange={(e) => setPlace(`${e.target.value} Nigeria`)}
          >
            {locations.map((e, index) => {
              return (
                <option key={index} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </section>
      </div>
      <section className="heading-date">{data.location.localtime}</section>
    </div>
  );
}

export default Heading;
