export default function Form({ newName, index }) {
  function handleChange(e) {
    newName(e.target.value, index);
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}
