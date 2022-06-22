import { useSelector } from "react-redux";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import Heading from "../ui/Heading";
import Table from "../ui/Table";
import StyledProvinceTable from "./ProvinceTable.styled";


function ProvinceTable() {
  // const { provinces } = props;

  const provinces = useSelector((store) => store.provinces.provinces)

  return(
    <>
      <StyledProvinceTable>
        <Heading>Provinsi</Heading>
        <Heading as="h4" size="sm" variant="secondary">Data Covid Berdasarkan Provinsi</Heading>
        <div className="provinceTable__container">
          <Table>
            <TableHead />
            {
              provinces.map((province, index) => {
                return (<TableBody key={index+1} province={province} index={index+1}/>)
              })
            }
          </Table>
        </div>
      </StyledProvinceTable>
    </>
  );
}

export default ProvinceTable;