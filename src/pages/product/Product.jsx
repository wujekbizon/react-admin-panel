import './product.scss';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

const Product = () => {
  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="newproduct">
          <button className="addButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="topLeft">
          <Chart title="Sales Performance" data={productData} dataKey="Sales" />
        </div>
        <div className="topRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">123</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">sales:</span>
              <span className="infoValue">4123</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">active:</span>
              <span className="infoValue">yes</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">in stock:</span>
              <span className="infoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="formLeft">
            <label htmlFor="name">Product Name</label>
            <input id="name" type="text" placeholder="Apple AirPod" />
            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="formRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <PublishOutlinedIcon className="productIcon" />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
