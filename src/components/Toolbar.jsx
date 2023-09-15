export const Toolbar = (props) => {
    const filters = props.filters;
    const selected = props.selected;
    const onSelectFilter = props.onSelectFilter;
    let i = 0;
    //const handleSelected = (selected) => 
  return (
    <>
    {  
    filters.map((val) =>
    //<button id={val} onClick={handleSelected}>{val}</button>
    <button key={i++} name={val} onClick={onSelectFilter}>{val}</button>
    ) 
    }
    <label>    Выбрано:  {selected}</label>
    </>
  )
}