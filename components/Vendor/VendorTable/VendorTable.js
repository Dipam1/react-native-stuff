import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import FaIcon from 'react-native-vector-icons/FontAwesome';
// import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import SpinLoader from '../../SpinLoader';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

const PettyContractorTable = () => {
  const [errors, hasErrors] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pettyTableData, setPettyTableData] = useState([]);
  const [tableMeta, setTableMeta] = useState({
    tableHead: [
      'ID',
      'Name',
      'Location',
      'Contact',
      'VAT/PAN',
    ],
    tableWidthArr: [100, 100, 100, 100, 100],
  });

  // API CALL FOR THE PETTY DATA
  // SETTING UP THE API CALL VIA AXIOS FOR TENDER BID DATA
  useEffect(() => {
    async function getData() {
      const response = await axios
        .get('http://www.classiccineuniverse.com.np/api/MOCK_DATA.json')
        .catch((error) => {
          hasErrors(error);
          //setIsLoading(false);
        });

      const result = response.data;

      const size = Object.keys(result).length;

      var i;

      const tableData = [];
      for (i = 0; i < size; i++) {
        const tempData = result[i];
        const rowData = [];
        rowData.push(
          tempData['vendor_id'],
          tempData['name'],
          tempData['location'],
          tempData['contact'],
          tempData['vat_pan'],
        );
        tableData.push(rowData);
      }
      setPettyTableData(tableData);
      setIsLoading(false);
      // console.log('Data loaded');
    }
    getData();
  }, []);

  // API CALL ENDS

  const _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  };

  const btnElement = (data, index) => (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.text}>
              abc
            {/* <FaIcon name="eye" size={15} color="#8f66e8" /> */}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.text}>
            {/* <McIcon name="delete" size={15} color="red" /> */}
            abc
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  function TableView() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={tableMeta.tableHead}
                style={styles.head}
                textStyle={styles.text}
                widthArr={tableMeta.tableWidthArr}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table>
                {pettyTableData.map((rowData, index) => (
                  <TableWrapper
                    key={index}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#9C9EA2'},
                    ]}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 7
                            ? btnElement(cellData, index)
                            : cellData
                        }
                        textStyle={styles.text}
                        style={{width: 100}}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }

  return <TableView />;
};

export default PettyContractorTable;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#DDDDDD', marginBottom: 4},
  text: {margin: 6, textAlign: 'center', justifyContent: 'center'},
  icons: {flexDirection: 'row', alignItems: 'center', marginLeft: 10},
  row: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#EEF0E8',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#ffff',
    borderRadius: 2,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataWrapper: {marginTop: -1},
});
