import Breadcrumb from '../components/Breadcrumb';
import MyTable from '../components/MyTable';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <MyTable />
        <TableTwo />
        <TableOne />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
