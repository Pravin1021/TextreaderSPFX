import { sp } from "@pnp/sp/presets/all";
import * as React from "react";

const Dashboard = (props) => {
  const [data, setdata] = React.useState([]);
  const Func = () => {
    let arr = [];
    sp.web.lists
      .getByTitle("Demo")
      .items.get()
      .then((response) => {
        response.forEach((val) => {
          arr.push({ Name: val.Name });
          setdata([...arr]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    Func();
  }, []);
  return (
    <div>
      {data.map((val, index) => (
        <tr key={index}>{val.Name}</tr>
      ))}
    </div>
  );
};

export default Dashboard;
