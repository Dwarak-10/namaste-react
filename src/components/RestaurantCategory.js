import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="bg-gray-100 w-6/12 mx-auto my-5 shadow-lg  p-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-sm">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
