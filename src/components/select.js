const SelectOption = ({
  items,
  handleChange = () => {},
  handleClick = () => {},
}) => {
  return (
    <div>
      <select
        onChange={(e) => handleChange(e.target.value)}
        onClick={handleClick}>
        <option value='option1'></option>
        {items.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;

// select dropdown
