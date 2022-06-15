import './featuredInfo.scss';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="moneyContainer">
          <span className="money">$2,415</span>
          <span className="moneyRate">
            -11.4 <ArrowDownwardOutlinedIcon className="icon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="moneyContainer">
          <span className="money">$4,415</span>
          <span className="moneyRate">
            -1.4 <ArrowDownwardOutlinedIcon className="icon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="moneyContainer">
          <span className="money">$1,415</span>
          <span className="moneyRate">
            5.4 <ArrowUpwardOutlinedIcon className="icon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
