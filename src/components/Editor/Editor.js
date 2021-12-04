import '../styles/Editor.css';

export default function Editor({ light, setLight, activity, setActivity }) {
  const handleLight = (e) => {
    setLight(e.target.value);
  };

  const handleActivity = (e) => {
    setActivity(e.target.value);
  };

  return (
    <div className="top">
      <div>
        <label>light label</label>
        <select value={light} onChange={handleLight}>
          <option value="lamp">lamp</option>
          <option value="candles">candle</option>
          <option value="fireplace">fire</option>
        </select>
      </div>

      <div>
        <label>activity label</label>
        <select value={activity} onChange={handleActivity}>
          <option value="napping">take a nap</option>
          <option value="reading">read a book</option>
          <option value="movie">watch a movie</option>
        </select>
      </div>
    </div>
  );
}
