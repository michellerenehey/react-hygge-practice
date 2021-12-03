import '../styles/Editor.css';

export default function Editor({ light, setLight }) {
  return (
    <div>
      <div className="top">
        <label>light label</label>
        <select>
          <option>light 1</option>
          <option>light 2</option>
          <option>light 3</option>
        </select>
      </div>

      <div className="top">
        <label>music label</label>
        <select>
          <option>music 1</option>
          <option>music 2</option>
          <option>music 3</option>
        </select>
      </div>

      <div className="top">
        <label>activity label</label>
        <select>
          <option>activity 1</option>
          <option>activity 2</option>
          <option>activity 3</option>
        </select>
      </div>
    </div>
  );
}
