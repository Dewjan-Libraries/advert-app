const ProductTile = ({ title,image }) => {
    return(
        <div className="flex border-[10px]">
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${image}?shareable_link=449`} alt={title} />
        </div>
    );
}

export default ProductTile