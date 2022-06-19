import './newProduct.scss';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

const NewProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label htmlFor="stock">Stock</label>
          <input id="stock" type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label htmlFor="file">
            Image
            <PublishOutlinedIcon className="uploadIcon" />
          </label>
          <input type="file" id="file" style={{ display: 'none' }} />
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
