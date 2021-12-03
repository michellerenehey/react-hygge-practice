import '../styles/Editor.css';

export default function Editor({ light, setLight }) {
  return (
    <div>
      <div className="top">
        <label>light label</label>
        <select>
          <option>light 1</option>
          <option>light 2</option>
        </select>
      </div>

      <div className="top">
        <label>music label</label>
        <select>
          <option>music 1</option>
          <option>music 2</option>
        </select>
      </div>

      <div className="top">
        <label>book label</label>
        <select>
          <option>book 1</option>
          <option>book 2</option>
        </select>
      </div>
    </div>
  );
}
