import '../styles/Editor.css';

export default function Editor({ light, setLight, activity, setActivity }) {
  const handleLight = (e) => {
    setLight(e.target.value);
  };

  const handleActivity = (e) => {
    setActivity(e.target.value);
  };

  return (
    <div>
      <div className="top">
        <label>light label</label>
        <select value={light} onChange={handleLight}>
          <option value="lamp">lamp</option>
          <option value="candles">candle</option>
          <option value="fireplace">fire</option>
        </select>
      </div>

      {/* <div className="top">
        <label>music label</label>
        <select>
          <option>music 1</option>
          <option>music 2</option>
          <option>music 3</option>
        </select>
      </div> */}

      <div className="top">
        <label>activity label</label>
        <select value={activity} onChange={setActivity}>
          <option value="napping">take a nap</option>
          <option value="reading">read a book</option>
          <option value="movie">watch a movie</option>
        </select>
      </div>
    </div>
  );
}
