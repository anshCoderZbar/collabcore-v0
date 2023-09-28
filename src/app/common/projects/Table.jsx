import React from "react";
import DataTable from "react-data-table-component";

import { TableColumns } from "app/mock/Projects";
import { TableData } from "app/mock/Projects";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const navigate = useNavigate();

  // const ExpandedComponent = ({ data }) => {
  //   console.log(data);
  //   return (
  //     <>
  //       <p>{data?.name}</p>
  //       <button className="button_green">
  //         <span>
  //           <AiOutlineCheck />
  //         </span>
  //         {data.status}
  //       </button>
  //       <p>{data?.date}</p>
  //       <img src={data?.img} />
  //       <p>{data?.type}</p>
  //     </>
  //   );
  // };

  // const generateExpandableRowsComponentProps = (rowData) => ({
  //   data: rowData,
  // });

  return (
    <DataTable
      columns={TableColumns}
      data={TableData}
      pagination
      highlightOnHover={true}
      pointerOnHover={true}
      paginationPerPage={5}
      // expandableRows
      // expandableRowsComponent={ExpandedComponent}
      // expandableRowsComponentProps={generateExpandableRowsComponentProps}
      onRowClicked={(e) =>
        navigate(`/projects/${e?.name.replaceAll(" ", "_")}`)
      }
    />
  );
};
