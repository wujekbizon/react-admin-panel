import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userData } from '../../dummyData';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
