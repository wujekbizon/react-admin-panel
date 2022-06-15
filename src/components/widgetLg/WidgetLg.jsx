import './widgetLg.scss';
import avatar from '../../assets/man.png';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`button ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="title">Latest transactions</h3>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">Customer</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetTr">
          <td className="user">
            <img className="img" src={avatar} alt="" />
            <span className="name">Greg Wolf</span>
          </td>
          <td className="date">15 Jun 2022</td>
          <td className="amount">$122.00</td>
          <td className="status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="user">
            <img className="img" src={avatar} alt="" />
            <span className="name">Greg Wolf</span>
          </td>
          <td className="date">15 Jun 2022</td>
          <td className="amount">$122.00</td>
          <td className="status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="user">
            <img className="img" src={avatar} alt="" />
            <span className="name">Greg Wolf</span>
          </td>
          <td className="date">15 Jun 2022</td>
          <td className="amount">$122.00</td>
          <td className="status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="user">
            <img className="img" src={avatar} alt="" />
            <span className="name">Greg Wolf</span>
          </td>
          <td className="date">15 Jun 2022</td>
          <td className="amount">$122.00</td>
          <td className="status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
